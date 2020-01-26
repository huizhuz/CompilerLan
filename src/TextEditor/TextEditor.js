import React, { Component } from 'react';
import Styles from './TextEditor.module.css'
import withState from '../redux/stateProvider';

const letters = /^[A-Za-z]+$/;
const operators = ['+', '-', '*', '/', '%'];
const assOperators = ['=', '+=', '-=', '*=', '/=', '%='];

class TextEditor extends Component {
    compile = (str) => {
        this.props.clearAll();
        const tokens = this.lexer(str);
        const parsedAST = this.parser(tokens);
        this.execute(parsedAST);
    };

    isValidIdentifier = (str) => {
        return str ?? str.match(letters) ?? str.match(letters).length === str.length;
    }
    // The lexer turns the input string into an array of tokens. 
    lexer = (str) => {
        return str.replace(/[;\n\r]/g, ' ').split(' ').filter(token => token.length).map((token) => {
            return isNaN(token) ? { type: 'word', value: token } : { type: 'number', value: token }
        })
    };
    // The parser turns the list of tokens into an Abstract Syntax Tree. 
    parser = (tokens) => {
        let AST = {
            type: 'cal',
            body: []
        };
        let declaredIdentifiers = [];
        const isIdentifierDeclared = (identifier) => {
            return !!declaredIdentifiers.find(id => id.name === identifier);
        }

        const getIdentifiersValue = (identifier) => {
            let index = declaredIdentifiers.findIndex(id => id.name === identifier)
            return declaredIdentifiers[index]?.value;
        }
        // parse a token at a time as current_token. Loop until we are out of tokens.
        while (tokens.length > 0) {
            var current_token = tokens.shift();

            if (current_token.value === 'int') {
                let declaration = {
                    type: 'declaration',
                    identifier: {
                        name: '',
                        value: null
                    },
                }
                let identifier = tokens.shift().value;
                if (this.isValidIdentifier(identifier) && !isIdentifierDeclared(identifier)) {
                    declaration.identifier.name = identifier;
                    // Identifier needs to be followed by an assignment operator
                    if (tokens[0] && tokens[0].value === '=') {
                        tokens.shift();
                        if (tokens[0] && !isNaN(tokens[0].value)) {
                            declaration.identifier.value = parseInt(tokens.shift().value);
                            declaredIdentifiers.push({
                                name: declaration.identifier.name,
                                value: declaration.identifier.value
                            })
                            AST.body.push(declaration);
                        } else {
                            this.props.addErrorMessage('Value should be assigned to identifier!');
                        }
                    } else {
                        this.props.addErrorMessage('Identifier is undefined!');
                    }
                } else {
                    this.props.addErrorMessage('Identifier is not valid!');
                }
            } else { // NOT 'int': not a declaration, so it must be an expression
                if (!isNaN(current_token.value) || isIdentifierDeclared(current_token.value)) {
                    let expression = {
                        type: 'expression',
                        operator: null,
                        expressions: []
                    };
                    if (!isNaN(current_token.value)) {
                        expression.expressions.push(parseInt(current_token.value))
                    } else {
                        expression.expressions.push(getIdentifiersValue(current_token.value))
                    }

                    let operator = tokens.shift()?.value;
                    if (operators.includes(operator)) {
                        expression.operator = operator;
                        let right_hand = tokens.shift().value;
                        if (!isNaN(right_hand) || isIdentifierDeclared(right_hand)) {
                            if (!isNaN(right_hand)) {
                                expression.expressions.push(parseInt(right_hand));
                                AST.body.push(expression);
                            } else {
                                expression.expressions.push(getIdentifiersValue(right_hand));
                                AST.body.push(expression);
                            }
                        } else {
                            this.props.addErrorMessage('Right-hand side of the binary operator is invalid');
                        }
                    } else {
                        this.props.addErrorMessage('Expecting a binary operator!');
                    }
                } else if (operators.includes(current_token.value)) {
                    this.props.addErrorMessage('All operators should be binary!');
                } else {
                    this.props.addErrorMessage('Invalid expression!');
                }
            }
        }
        return AST;
    }

    execute = (AST) => {
        AST.body.forEach(el => {
            if (el.type === 'expression') {
                let leftHand = el.expressions[0];
                let rightHand = el.expressions[1];
                let operator = el.operator;
                if ((operator == '/' || '%') && rightHand == 0) {
                    this.props.addErrorMessage('Algebra 101, nothing can be divided by zero.');
                } else {
                    switch (operator) {
                        case '+':
                            this.props.addOutput(parseInt(leftHand + rightHand));
                            break;
                        case '-':
                            this.props.addOutput(parseInt(leftHand - rightHand));
                            break;
                        case '*':
                            this.props.addOutput(parseInt(leftHand * rightHand));
                            break;
                        case '/':
                            this.props.addOutput(parseInt(leftHand / rightHand));
                            break;
                        case '%':
                            this.props.addOutput(parseInt(leftHand % rightHand));
                            break;
                    }
                }
            }
        });
    }

    render() {
        return (
            <div className={Styles.TextEditorWrapper}>
                <p>Write your code here: </p>
                <textarea value={this.props.code} onChange={(e) => this.props.writeCode(e)} />
                <div className={Styles.CompileButton}
                    onClick={() => this.compile(this.props.code)}>Compile</div>
            </div>
        )
    }
}
export default withState(TextEditor)