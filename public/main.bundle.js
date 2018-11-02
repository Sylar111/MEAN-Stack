webpackJsonp(["main"],{

/***/ "./build/contracts/Payment.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"Payment","abi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_transferTo","type":"address"},{"indexed":false,"name":"_transferFrom","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TransferFund","type":"event"},{"constant":false,"inputs":[{"name":"_transferTo","type":"address"}],"name":"transferFund","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"getBalanceOfCurrentAccount","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102c0806100606000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063cd4558fd14610051578063eba1877b1461009f575b600080fd5b610085600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100bd565b604051808215151515815260200191505060405180910390f35b6100a7610254565b6040518082815260200191505060405180910390f35b600081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610168573d6000803e3d6000fd5b507f41f7a8a1a70f43ecf6769f65a9933ba3370058d8e3422511a890553ba75ff3e8600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1634604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a160019050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16319050905600a165627a7a7230582042b6833bf9c7ca3b05124ae8bbfb31c412026406089e99ede15fffbf53a404c30029","deployedBytecode":"0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063cd4558fd14610051578063eba1877b1461009f575b600080fd5b610085600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100bd565b604051808215151515815260200191505060405180910390f35b6100a7610254565b6040518082815260200191505060405180910390f35b600081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610168573d6000803e3d6000fd5b507f41f7a8a1a70f43ecf6769f65a9933ba3370058d8e3422511a890553ba75ff3e8600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1634604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a160019050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16319050905600a165627a7a7230582042b6833bf9c7ca3b05124ae8bbfb31c412026406089e99ede15fffbf53a404c30029","sourceMap":"26:555:1:-;;;94:57;8:9:-1;5:2;;;30:1;27;20:12;5:2;94:57:1;136:10;121:12;;:25;;;;;;;;;;;;;;;;;;26:555;;;;;;","deployedSourceMap":"26:555:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;235:233;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;472:106;;;;;;;;;;;;;;;;;;;;;;;235:233;304:4;330:11;317:10;;:24;;;;;;;;;;;;;;;;;;350:10;;;;;;;;;;;:19;;:30;370:9;350:30;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;350:30:1;394:49;407:10;;;;;;;;;;;419:12;;;;;;;;;;;433:9;394:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;459:4;452:11;;235:233;;;:::o;472:106::-;534:4;553:12;;;;;;;;;;;:20;;;546:27;;472:106;:::o","source":"pragma solidity ^0.4.17;\n\ncontract Payment {\n  address transferFrom;\n  address transferTo;\n\n  constructor() public {\n    transferFrom = msg.sender;\n  }\n\n  event TransferFund(address _transferTo, address _transferFrom, uint amount);\n\n  function transferFund( address _transferTo ) public payable returns (bool){\n      transferTo = _transferTo;\n\n      transferTo.transfer(msg.value);\n\n      emit TransferFund(transferTo, transferFrom, msg.value);\n\n      return true;\n  }\n\n  function getBalanceOfCurrentAccount() public payable returns (uint) {\n    return transferFrom.balance;\n  }\n\n}\n","sourcePath":"/Users/user/VY/Eth/project123/contracts/Payment.sol","ast":{"absolutePath":"/Users/user/VY/Eth/project123/contracts/Payment.sol","exportedSymbols":{"Payment":[117]},"id":118,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".17"],"nodeType":"PragmaDirective","src":"0:24:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":117,"linearizedBaseContracts":[117],"name":"Payment","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"transferFrom","nodeType":"VariableDeclaration","scope":117,"src":"47:20:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":59,"name":"address","nodeType":"ElementaryTypeName","src":"47:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":62,"name":"transferTo","nodeType":"VariableDeclaration","scope":117,"src":"71:18:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":61,"name":"address","nodeType":"ElementaryTypeName","src":"71:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"body":{"id":70,"nodeType":"Block","src":"115:36:1","statements":[{"expression":{"argumentTypes":null,"id":68,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":65,"name":"transferFrom","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"121:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":66,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"136:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":67,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"136:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"121:25:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":69,"nodeType":"ExpressionStatement","src":"121:25:1"}]},"documentation":null,"id":71,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":63,"nodeType":"ParameterList","parameters":[],"src":"105:2:1"},"payable":false,"returnParameters":{"id":64,"nodeType":"ParameterList","parameters":[],"src":"115:0:1"},"scope":117,"src":"94:57:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":79,"name":"TransferFund","nodeType":"EventDefinition","parameters":{"id":78,"nodeType":"ParameterList","parameters":[{"constant":false,"id":73,"indexed":false,"name":"_transferTo","nodeType":"VariableDeclaration","scope":79,"src":"174:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":72,"name":"address","nodeType":"ElementaryTypeName","src":"174:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":75,"indexed":false,"name":"_transferFrom","nodeType":"VariableDeclaration","scope":79,"src":"195:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":74,"name":"address","nodeType":"ElementaryTypeName","src":"195:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":77,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":79,"src":"218:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":76,"name":"uint","nodeType":"ElementaryTypeName","src":"218:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"173:57:1"},"src":"155:76:1"},{"body":{"id":106,"nodeType":"Block","src":"309:159:1","statements":[{"expression":{"argumentTypes":null,"id":88,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":86,"name":"transferTo","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"317:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":87,"name":"_transferTo","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":81,"src":"330:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"317:24:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":89,"nodeType":"ExpressionStatement","src":"317:24:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":93,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"370:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"370:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":90,"name":"transferTo","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"350:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":92,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transfer","nodeType":"MemberAccess","referencedDeclaration":null,"src":"350:19:1","typeDescriptions":{"typeIdentifier":"t_function_transfer_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":95,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"350:30:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":96,"nodeType":"ExpressionStatement","src":"350:30:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":98,"name":"transferTo","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"407:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":99,"name":"transferFrom","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"419:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":100,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"433:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":101,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"433:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":97,"name":"TransferFund","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"394:12:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":102,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"394:49:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":103,"nodeType":"EmitStatement","src":"389:54:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":104,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"459:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":85,"id":105,"nodeType":"Return","src":"452:11:1"}]},"documentation":null,"id":107,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"transferFund","nodeType":"FunctionDefinition","parameters":{"id":82,"nodeType":"ParameterList","parameters":[{"constant":false,"id":81,"name":"_transferTo","nodeType":"VariableDeclaration","scope":107,"src":"258:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":80,"name":"address","nodeType":"ElementaryTypeName","src":"258:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"256:23:1"},"payable":true,"returnParameters":{"id":85,"nodeType":"ParameterList","parameters":[{"constant":false,"id":84,"name":"","nodeType":"VariableDeclaration","scope":107,"src":"304:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":83,"name":"bool","nodeType":"ElementaryTypeName","src":"304:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"303:6:1"},"scope":117,"src":"235:233:1","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":115,"nodeType":"Block","src":"540:38:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":112,"name":"transferFrom","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"553:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":113,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"553:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":111,"id":114,"nodeType":"Return","src":"546:27:1"}]},"documentation":null,"id":116,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"getBalanceOfCurrentAccount","nodeType":"FunctionDefinition","parameters":{"id":108,"nodeType":"ParameterList","parameters":[],"src":"507:2:1"},"payable":true,"returnParameters":{"id":111,"nodeType":"ParameterList","parameters":[{"constant":false,"id":110,"name":"","nodeType":"VariableDeclaration","scope":116,"src":"534:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":109,"name":"uint","nodeType":"ElementaryTypeName","src":"534:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"533:6:1"},"scope":117,"src":"472:106:1","stateMutability":"payable","superFunction":null,"visibility":"public"}],"scope":118,"src":"26:555:1"}],"src":"0:582:1"},"legacyAST":{"absolutePath":"/Users/user/VY/Eth/project123/contracts/Payment.sol","exportedSymbols":{"Payment":[117]},"id":118,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".17"],"nodeType":"PragmaDirective","src":"0:24:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":117,"linearizedBaseContracts":[117],"name":"Payment","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"transferFrom","nodeType":"VariableDeclaration","scope":117,"src":"47:20:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":59,"name":"address","nodeType":"ElementaryTypeName","src":"47:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":62,"name":"transferTo","nodeType":"VariableDeclaration","scope":117,"src":"71:18:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":61,"name":"address","nodeType":"ElementaryTypeName","src":"71:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"body":{"id":70,"nodeType":"Block","src":"115:36:1","statements":[{"expression":{"argumentTypes":null,"id":68,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":65,"name":"transferFrom","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"121:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":66,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"136:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":67,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"136:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"121:25:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":69,"nodeType":"ExpressionStatement","src":"121:25:1"}]},"documentation":null,"id":71,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":63,"nodeType":"ParameterList","parameters":[],"src":"105:2:1"},"payable":false,"returnParameters":{"id":64,"nodeType":"ParameterList","parameters":[],"src":"115:0:1"},"scope":117,"src":"94:57:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":79,"name":"TransferFund","nodeType":"EventDefinition","parameters":{"id":78,"nodeType":"ParameterList","parameters":[{"constant":false,"id":73,"indexed":false,"name":"_transferTo","nodeType":"VariableDeclaration","scope":79,"src":"174:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":72,"name":"address","nodeType":"ElementaryTypeName","src":"174:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":75,"indexed":false,"name":"_transferFrom","nodeType":"VariableDeclaration","scope":79,"src":"195:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":74,"name":"address","nodeType":"ElementaryTypeName","src":"195:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":77,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":79,"src":"218:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":76,"name":"uint","nodeType":"ElementaryTypeName","src":"218:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"173:57:1"},"src":"155:76:1"},{"body":{"id":106,"nodeType":"Block","src":"309:159:1","statements":[{"expression":{"argumentTypes":null,"id":88,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":86,"name":"transferTo","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"317:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":87,"name":"_transferTo","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":81,"src":"330:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"317:24:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":89,"nodeType":"ExpressionStatement","src":"317:24:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":93,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"370:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"370:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":90,"name":"transferTo","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"350:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":92,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transfer","nodeType":"MemberAccess","referencedDeclaration":null,"src":"350:19:1","typeDescriptions":{"typeIdentifier":"t_function_transfer_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":95,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"350:30:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":96,"nodeType":"ExpressionStatement","src":"350:30:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":98,"name":"transferTo","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":62,"src":"407:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":99,"name":"transferFrom","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"419:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":100,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"433:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":101,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"433:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":97,"name":"TransferFund","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"394:12:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":102,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"394:49:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":103,"nodeType":"EmitStatement","src":"389:54:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":104,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"459:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":85,"id":105,"nodeType":"Return","src":"452:11:1"}]},"documentation":null,"id":107,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"transferFund","nodeType":"FunctionDefinition","parameters":{"id":82,"nodeType":"ParameterList","parameters":[{"constant":false,"id":81,"name":"_transferTo","nodeType":"VariableDeclaration","scope":107,"src":"258:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":80,"name":"address","nodeType":"ElementaryTypeName","src":"258:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"256:23:1"},"payable":true,"returnParameters":{"id":85,"nodeType":"ParameterList","parameters":[{"constant":false,"id":84,"name":"","nodeType":"VariableDeclaration","scope":107,"src":"304:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":83,"name":"bool","nodeType":"ElementaryTypeName","src":"304:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"303:6:1"},"scope":117,"src":"235:233:1","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":115,"nodeType":"Block","src":"540:38:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":112,"name":"transferFrom","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"553:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":113,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"553:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":111,"id":114,"nodeType":"Return","src":"546:27:1"}]},"documentation":null,"id":116,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"getBalanceOfCurrentAccount","nodeType":"FunctionDefinition","parameters":{"id":108,"nodeType":"ParameterList","parameters":[],"src":"507:2:1"},"payable":true,"returnParameters":{"id":111,"nodeType":"ParameterList","parameters":[{"constant":false,"id":110,"name":"","nodeType":"VariableDeclaration","scope":116,"src":"534:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":109,"name":"uint","nodeType":"ElementaryTypeName","src":"534:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"533:6:1"},"scope":117,"src":"472:106:1","stateMutability":"payable","superFunction":null,"visibility":"public"}],"scope":118,"src":"26:555:1"}],"src":"0:582:1"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0x2521836bddf5738b2c4583365d55fdf7da2c73ee","transactionHash":"0x6f8aeac5885d6e5e3a121e259cce4de18381025fd5ac4a9657859ce1570ba922"},"4447":{"events":{},"links":{},"address":"0x82d50ad3c1091866e258fd0f1a7cc9674609d254","transactionHash":"0x9471150a586eb3ad9d64f2a341c5d01021045b131e4cc866c38935d774ee2781"},"5777":{"events":{},"links":{},"address":"0xaabf4f10d2ae00a8be2934b862840e57b1865ac9","transactionHash":"0xc8829fe6c3384c695789125fbfca3beac53e4b895c2789b3b46a05338a295f21"}},"schemaVersion":"2.0.1","updatedAt":"2018-10-05T16:13:00.255Z"}

/***/ }),

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Custom Success/Erro Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n\n\n\n<!-- Editable table -->\n<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Management Users</h3>\n  <div class=\"card-body\">\n    <div  class=\"table-editable\">\n      <table class=\"table table-bordered  table-striped text-center\">\n        <tr>\n\n          <th class=\"text-center\">Name</th>\n          <th class=\"text-center\">Username</th>\n          <th class=\"text-center\">Email</th>\n          <th class=\"text-center\">Permission</th>\n        </tr>\n        <tr *ngFor=\"let user of userPosts\">\n\n          <td class=\"text-center\">{{ user.name }}</td>\n          <td class=\"text-center\">{{ user.username }}</td>\n          <td class=\"text-center\">{{ user.email }}</td>\n          <td class=\"text-center\">{{ user.permission }}\n            <!-- Edit Button -->\n            <a [routerLink]=\"['/edit-permission/']\">\n              <button type=\"button\" class=\"btn btn-elegant waves-light\"  mdbWavesEffect routerLink=\"edit-permission\">Edit</button> </a>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n<!-- Editable table -->\n\n\n"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.newPost = false;
        this.createNewCharityForm();
    }
    AdminDashboardComponent.prototype.getAllUser = function () {
        var _this = this;
        this.authService.getAllUser().subscribe(function (data) {
            _this.userPosts = data.user;
        });
    };
    AdminDashboardComponent.prototype.createNewCharityForm = function () {
        this.form = this.fb.group({
            permission: [''],
        });
    };
    AdminDashboardComponent.prototype.updatePemission = function () {
        var _this = this;
        this.authService.editPermission(this.permission).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
            }
        });
    };
    AdminDashboardComponent.prototype.newCharityForm = function () {
        this.newPost = true; // Show new Charity form
    };
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.getAllUser();
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin-dashboard/edit-permission/edit-permission.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-dashboard/edit-permission/edit-permission.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Permission</h1>\n\n<!-- Custom Success/Erro Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Edit charity Form -->\n<form (submit)=\"updatePemission()\" *ngIf=\"!loading\">\n  <!-- Title Field -->\n  <div class=\"form-group\">\n    <label for=\"permission\">Permission</label>\n    <!-- Title Input -->\n    <input [disabled]=\"processing\" type=\"text\" id=\"permission\" name=\"permission\" placeholder=\"*Permission\" class=\"form-control\" [(ngModel)]=\"permission\" />\n  </div>\n\n\n\n  <!-- Delete Button -->\n  <!--  <a [routerLink]=\"['/delete-charity/', charity._id]\" *ngIf=\"username === charity.createdBy\"><button  [disabled]=\"processing\"  type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button></a>\n   <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>\n  <!-- Save Changes Button -->\n  <button [disabled]=\"processing\"  type=\"submit\" name=\"save\" class=\"btn btn-info\">Save Changes</button>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/admin-dashboard/edit-permission/edit-permission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPermissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_charity_service__ = __webpack_require__("./src/app/services/charity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPermissionComponent = /** @class */ (function () {
    function EditPermissionComponent(location, activatedRoute, charityService, authService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.charityService = charityService;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    // Function to Submit Update
    EditPermissionComponent.prototype.updateCharitySubmit = function () {
        var _this = this;
        this.processing = true;
        this.charityService.editCharity(this.charity).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                _this.message = data.message; // Set error message
                _this.processing = false; // Unlock form fields
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set success bootstrap class
                _this.message = data.message; // Set success message
                // After two seconds, navigate back to charityList page
                setTimeout(function () {
                    _this.router.navigate(['/charity']); // Navigate back to route page
                }, 2000);
            }
        });
    };
    EditPermissionComponent.prototype.updatePemission = function () {
        var _this = this;
        this.authService.editPermission(this.permission).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
            }
        });
    };
    // Function to go back to previous page
    EditPermissionComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditPermissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
        // Function to GET current charity with id in params
        this.charityService.getSingleCharity(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = 'Charity not found ! ';
            }
            else {
                _this.charity = data.charity; // Save charity object for use in HTML
                _this.loading = false;
            }
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new Charity posts and comments
            _this.permission = profile.user.permission;
        });
    };
    EditPermissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-permission',
            template: __webpack_require__("./src/app/admin-dashboard/edit-permission/edit-permission.component.html"),
            styles: [__webpack_require__("./src/app/admin-dashboard/edit-permission/edit-permission.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_charity_service__["a" /* CharityService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditPermissionComponent);
    return EditPermissionComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onlogin()\">\n\n  <br /><br /><br /><br /><br />\n\n\n  <div class=\" col-md-4 container-fluid  modal-content \">\n    <div class=\"md-form col-md-12 container-fluid \">\n      <i class=\"fa fa-user prefix grey-text\"></i>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\"  mdbInputDirective>\n      <label>Your username</label>\n    </div>\n\n    <div class=\"md-form col-md-12 container-fluid\">\n      <i class=\"fa fa-lock prefix grey-text\"></i>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" mdbInputDirective>\n      <label>Your password</label>\n    </div>\n\n    <div class=\"text-center\">\n      <input type=\"submit\" class=\"btn btn-default waves-light\" mdbWavesEffect value=\"Admin Login\">\n    </div>\n\n  </div>\n</form>\n<!-- Login form -->\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_service__ = __webpack_require__("./src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminService, router, flashMessage) {
        this.adminService = adminService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onlogin = function () {
        var _this = this;
        var admin = {
            username: this.username,
            password: this.password
        };
        this.adminService.authenticateAdmin(admin).subscribe(function (data) {
            if (data.success) {
                _this.adminService.storeAdminData(data.token, data.admin);
                _this.flashMessage.show('Admin Dashboard', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/admin/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['']);
            }
        });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charity_charity_component__ = __webpack_require__("./src/app/charity/charity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charity_edit_charity_edit_charity_component__ = __webpack_require__("./src/app/charity/edit-charity/edit-charity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charity_delete_charity_delete_charity_component__ = __webpack_require__("./src/app/charity/delete-charity/delete-charity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__donation_donation_component__ = __webpack_require__("./src/app/donation/donation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_dashboard_admin_dashboard_component__ = __webpack_require__("./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__charitydashboard_charitydashboard_component__ = __webpack_require__("./src/app/charitydashboard/charitydashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__userguide_userguide_component__ = __webpack_require__("./src/app/userguide/userguide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__searching_searching_component__ = __webpack_require__("./src/app/searching/searching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_dashboard_edit_permission_edit_permission_component__ = __webpack_require__("./src/app/admin-dashboard/edit-permission/edit-permission.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // Add this
 // Add this


 // Add this
 // Add this
 // Add this
 // Add this









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_12__admin_admin_component__["a" /* AdminComponent */]
    },
    {
        path: 'admin/dashboard',
        component: __WEBPACK_IMPORTED_MODULE_13__admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
    },
    {
        path: 'charity',
        component: __WEBPACK_IMPORTED_MODULE_3__charity_charity_component__["a" /* CharityComponent */]
    },
    {
        path: 'edit-charity/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__charity_edit_charity_edit_charity_component__["a" /* EditCharityComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'delete-charity/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__charity_delete_charity_delete_charity_component__["a" /* DeleteCharityComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'donation',
        component: __WEBPACK_IMPORTED_MODULE_6__donation_donation_component__["a" /* DonationComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'charitydashboard',
        component: __WEBPACK_IMPORTED_MODULE_15__charitydashboard_charitydashboard_component__["a" /* CharitydashboardComponent */]
    },
    {
        path: 'userguide',
        component: __WEBPACK_IMPORTED_MODULE_16__userguide_userguide_component__["a" /* UserguideComponent */]
    },
    {
        path: 'searching',
        component: __WEBPACK_IMPORTED_MODULE_17__searching_searching_component__["a" /* SearchingComponent */]
    },
    {
        path: 'edit-permission/',
        component: __WEBPACK_IMPORTED_MODULE_18__admin_dashboard_edit_permission_edit_permission_component__["a" /* EditPermissionComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".form-control  {\n  float: right;\n  margin-left: 40px;\n  width: 300px;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark unique-color-dark scrolling-navbar ie-nav \" [containerInside]=\"false\">\n    <links>\n      <ul class=\"navbar-nav mr-auto navbar-centre\">\n        <li class=\"nav-item\" >\n      <img src=\"https://image.ibb.co/fcQKHS/Untitled.png\" class=\"rounded-circle img-fluid\" alt=\"avatar image\" width=\"40\">\n      <a class=\"logo navbar-brand\" href=\"#\" ><strong> RELIANCE </strong></a>\n        </li>\n        <li class=\"nav-item  waves-light\" mdbWavesEffect>\n          <a class=\"nav-link\" routerLink=\"\">Home<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a class=\"nav-link\" routerLink=\"donation\">Donation</a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a class=\"nav-link\" routerLink=\"charity\">CharityList</a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a  class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"register\">Register</a>\n        </li>\n        <li  class=\"nav-item waves-light \" mdbWavesEffect >\n          <a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"login\">LogIn</a>\n        </li>\n        <li class=\"nav-item waves-light \" mdbWavesEffect >\n          <a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" routerLink=\"profile\">Profile</a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a  class=\"nav-link\" routerLink=\"contact\">Contact</a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a  class=\"nav-link\" routerLink=\"userguide\">UserGuide</a>\n        </li>\n        <li class=\"nav-item waves-light \" mdbWavesEffect >\n          <a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" (click) = \"onLogoutClick()\" href=\"#\">Logout</a>\n        </li>\n\n          <!-- Quickly Search Function -->\n        <li class=\"form-inline\">\n          <div class=\"md-form my-0\">\n            <input id=\"etherwallet\" [(ngModel)]=\"etherwallet\" style=\"color: white\"\n                   class=\"form-control\" type=\"text\" placeholder=\"Search by Address\" aria-label=\"Search\">\n          </div>\n          <button (click)=\"toggle()\" (click)=\"sendValues()\"\n                  class=\"btn btn-outline-white btn-md my-0 ml-sm-1\" type=\"submit\" >{{buttonName}}</button>\n\n\n\n\n\n\n        <div *ngIf=\"show\">\n\n\n          <div class=\"content-wrapper\">\n            <div class=\"container-fluid\">\n\n\n\n              <div class=\"row\">\n\n                <div class=\"col-lg-11\">\n\n\n\n\n                  <!--<div class=\"card\">\n                    <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Price table</h3>\n                    <div class=\"card-body\">\n                      <div  class=\"table-editable\">\n                        <table class=\"table table-bordered  table-striped text-center\">\n                          <tr>\n\n                            <th class=\"text-center\">Coins</th>\n                            <th class=\"text-center\">USD</th>\n                            <th class=\"text-center\">AUD</th>\n\n                          </tr>\n                          <tr *ngFor=\"let crypto of objectKeys(cryptos)\">\n\n                            <td class=\"text-center\">{{ crypto }}</td>\n                            <td class=\"text-center\">{{ cryptos[crypto].USD | currency: 'USD':'symbol-narrow'}}</td>\n                            <td class=\"text-center\">{{cryptos[crypto].AUD | currency: 'AUD':'symbol-narrow'}}</td>\n                          </tr>\n                        </table>\n                      </div>\n                    </div>\n                  </div>-->\n                  <br/>\n                  <br/>\n\n\n                  <br/>\n                  <div class=\"card mb-3\">\n                      <i class=\"fa fa-chain-broken\"></i>\n                      <div class=\"table table-success\">\n                        <table class=\"table table-warning\" width=\"100%\">\n                          <thead>\n                          <tr>\n                            <th>Transactions</th>\n                            <td style=\"color:red\" *ngFor=\"let posts of (traninfo | slice: -1); let i = index\"><strong>\n                              {{traninfo.length}} &nbsp;txns\n                            </strong></td>\n\n                          </tr>\n                          </thead>\n                          <tbody>\n                          <tr>\n                            <th>Balance</th>\n                            <td><p style=\"color:red\"><strong>{{resultinfo[0].balance*0.000000000000000001}} &nbsp;Ether</strong></p></td>\n                          </tr>\n                          </tbody>\n                        </table>\n                      </div>\n\n                  </div>\n\n                  <br/>\n                  <br/>\n                </div>\n              </div>\n                </div>\n              </div>\n            </div>\n\n\n        </li>\n\n\n      </ul>\n\n\n    </links>\n\n  </mdb-navbar>\n\n</header>\n\n<div class =\"container\">\n\n<flash-messages></flash-messages>\n</div>\n\n\n<ng-loading-spinner></ng-loading-spinner>\n\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gettransaction_service__ = __webpack_require__("./src/app/services/gettransaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_getbalance_service__ = __webpack_require__("./src/app/services/getbalance.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router, flashMessage, getbalanceService, gettransactionService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.getbalanceService = getbalanceService;
        this.gettransactionService = gettransactionService;
        this.objectKeys = Object.keys;
        this.num = this.number + 1;
        this.chart = [];
        this.show = false;
        this.title = 'app';
    }
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    AppComponent.prototype.sendValues = function () {
        var _this = this;
        this.getbalanceService.getBalances(this.etherwallet)
            .subscribe(function (temp) {
            _this.resultinfo = temp.result;
            console.log(temp.result);
            console.log(_this.etherwallet);
        });
        this.gettransactionService.getTrans(this.etherwallet)
            .subscribe(function (temp) {
            _this.traninfo = temp.result;
            console.log(temp.result);
        });
    };
    AppComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show) {
            this.buttonName = 'BACK';
        }
        else {
            this.buttonName = 'GO';
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__services_getbalance_service__["a" /* GetbalanceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_gettransaction_service__["a" /* GettransactionService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charity_charity_component__ = __webpack_require__("./src/app/charity/charity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__donation_donation_component__ = __webpack_require__("./src/app/donation/donation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_charity_service__ = __webpack_require__("./src/app/services/charity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_admin_service__ = __webpack_require__("./src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_dashboard_admin_dashboard_component__ = __webpack_require__("./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_admin_guard__ = __webpack_require__("./src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__charity_edit_charity_edit_charity_component__ = __webpack_require__("./src/app/charity/edit-charity/edit-charity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_permission_guard__ = __webpack_require__("./src/app/guards/permission.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__charity_delete_charity_delete_charity_component__ = __webpack_require__("./src/app/charity/delete-charity/delete-charity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__charity_new_charity_new_charity_component__ = __webpack_require__("./src/app/charity/new-charity/new-charity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__public_profile_public_profile_component__ = __webpack_require__("./src/app/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_transaction_service__ = __webpack_require__("./src/app/services/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_ethcontract_service__ = __webpack_require__("./src/app/services/ethcontract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_internaltrans_service__ = __webpack_require__("./src/app/services/internaltrans.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__charitydashboard_charitydashboard_component__ = __webpack_require__("./src/app/charitydashboard/charitydashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ng_loading_spinner__ = __webpack_require__("./node_modules/ng-loading-spinner/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__userguide_userguide_component__ = __webpack_require__("./src/app/userguide/userguide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_markdown__ = __webpack_require__("./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ngx_markdown_editor__ = __webpack_require__("./node_modules/ngx-markdown-editor/esm5/ngx-markdown-editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__searching_searching_component__ = __webpack_require__("./src/app/searching/searching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_getbalance_service__ = __webpack_require__("./src/app/services/getbalance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_gettransaction_service__ = __webpack_require__("./src/app/services/gettransaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__admin_dashboard_edit_permission_edit_permission_component__ = __webpack_require__("./src/app/admin-dashboard/edit-permission/edit-permission.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__charity_charity_component__["a" /* CharityComponent */],
                __WEBPACK_IMPORTED_MODULE_7__donation_donation_component__["a" /* DonationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_25__charity_edit_charity_edit_charity_component__["a" /* EditCharityComponent */],
                __WEBPACK_IMPORTED_MODULE_27__charity_delete_charity_delete_charity_component__["a" /* DeleteCharityComponent */],
                __WEBPACK_IMPORTED_MODULE_28__charity_new_charity_new_charity_component__["a" /* NewCharityComponent */],
                __WEBPACK_IMPORTED_MODULE_29__public_profile_public_profile_component__["a" /* PublicProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_32__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_36__charitydashboard_charitydashboard_component__["a" /* CharitydashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_38__userguide_userguide_component__["a" /* UserguideComponent */],
                __WEBPACK_IMPORTED_MODULE_41__searching_searching_component__["a" /* SearchingComponent */],
                __WEBPACK_IMPORTED_MODULE_45__admin_dashboard_edit_permission_edit_permission_component__["a" /* EditPermissionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_44_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_37_ng_loading_spinner__["b" /* NgLoadingSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_39_ngx_markdown__["a" /* MarkdownModule */].forRoot({ loader: __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClient */] }),
                __WEBPACK_IMPORTED_MODULE_40_ngx_markdown_editor__["a" /* LMarkdownEditorModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"]],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_37_ng_loading_spinner__["a" /* NgLoadingSpinnerInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_35__services_internaltrans_service__["a" /* InternaltransService */], __WEBPACK_IMPORTED_MODULE_34__services_ethcontract_service__["a" /* EthcontractService */], __WEBPACK_IMPORTED_MODULE_33__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_30__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_31__services_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_21__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_23__guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_26__guards_permission_guard__["a" /* PermissionGuard */], __WEBPACK_IMPORTED_MODULE_19__services_charity_service__["a" /* CharityService */], __WEBPACK_IMPORTED_MODULE_24__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_42__services_getbalance_service__["a" /* GetbalanceService */], __WEBPACK_IMPORTED_MODULE_43__services_gettransaction_service__["a" /* GettransactionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__charity_charity_component__["a" /* CharityComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/charity/charity.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n<h1 class=\"page-header text-center\"><strong>Charity List</strong></h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- New Post Button -->\n\n<a [routerLink]=\"['/charitydashboard/']\" *ngIf=\"permission === 'charity'\">\n  <button type=\"button\" class=\"btn btn-elegant waves-light\" *ngIf=\"!newPost\" mdbWavesEffect routerLink=\"charitydashboard\">Check Charity Funds</button> </a>\n\n<a [routerLink]=\"['/new-charity/']\" *ngIf=\"permission === 'charity'\">\n  <button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newCharityForm()\">New Post</button> </a>\n\n\n<!-- Reload Button -->\n<button [disabled]=\"loadingCharity\" type=\"button\" name=\"button\" class=\"btn btn-default\" *ngIf=\"!newPost\" (click)=\"reloadCharity()\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Reload</button>\n\n<br />\n<br />\n\n<!-- New Charity Form -->\n<form [formGroup]=\"form\" name=\"charityForm\" (submit)=\"onCharitySubmit()\" *ngIf=\"newPost\">\n  <!-- Title Input -->\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors}\">\n      <input type=\"text\" name=\"title\" class=\"form-control\" id=\"title\" placeholder=\"*Charity Title\" autocomplete=\"off\" formControlName=\"title\" />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\n        <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">Max length: 50, Min length: 5</li>\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Body Input -->\n  <div class=\"form-group\">\n    <label for=\"body\">Body</label>\n    <div [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors}\">\n\n      <textarea name=\"body\" rows=\"8\" cols=\"80\" id=\"body\" placeholder=\"*Body\" class=\"form-control\" formControlName=\"body\"></textarea>\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required.</li>\n        <li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">Max length: 500, Min length: 5</li>\n      </ul>\n\n    </div>\n  </div>\n\n\n\n  <div class=\"form-group\">\n    <label for=\"bitCoin\">bitCoin Wallet</label>\n    <div>\n      <input type=\"text\" name=\"bitCoin\" class=\"form-control\" id=\"bitCoin\" placeholder=\"*bitCoin Wallet\" autocomplete=\"off\" formControlName=\"bitCoin\" />\n\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"ether\">ether Wallet</label>\n    <div >\n      <input type=\"text\" name=\"ether\" class=\"form-control\" id=\"ether\" placeholder=\"*ether Wallet\" autocomplete=\"off\" formControlName=\"ether\" />\n\n    </div>\n  </div>\n\n  <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back</button>\n  <!-- Submit Button -->\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\n\n</form>\n<!-- New Charity Form -->\n\n<!-- Panel Start -->\n<div *ngIf=\"!newPost\">\n  <!-- Panel Outer Layer -->\n  <div class=\"content-wrapper\">\n    <div class=\"container-fluid\">\n\n      <!-- Area Charts -->\n      <br/>\n      <br/>\n\n      <div class=\"row\">\n        <div class=\"col-lg-7\">\n\n\n\n\n\n\n  <div class=\"panel panel-primary container-fluid  modal-content\" *ngFor=\"let charity of charityPosts\">\n\n    <!-- Panel Title -->\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\"> <strong>Title:     </strong>{{ charity.title }}</h3>\n    </div>\n\n    <!-- Panel Body -->\n    <div class=\"panel-body\">\n      <strong>Detail:     </strong> {{ charity.body }}\n    </div>\n    <br/>\n\n\n\n    <div class=\"panel-body\">\n      <strong>BitCoin Wallet:     </strong>{{ charity.bitCoin}}\n    </div>\n    <br />\n\n    <div class=\"panel-body\">\n      <strong>Ethereum Wallet:      </strong>{{ charity.ether}}\n    </div>\n    <br />\n\n    <!-- Panel Footer Start -->\n    <div class=\"panel-footer\">\n      <strong>Posted by: </strong> {{ charity.createdBy }}\n      <br />\n      <strong>Date: </strong>{{ charity.createdAt | date: 'MMM dd, yyyy'}}\n      <br />\n      <div *ngIf=\"username === charity.createdBy\">\n        <strong>Likes: </strong>{{ charity.likes }}\n        <br />\n        <strong>Dislikes: </strong>{{ charity.dislikes }}\n      </div>\n\n      <!-- Edit Button -->\n      <a [routerLink]=\"['/edit-charity/', charity._id]\" *ngIf=\"username === charity.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\n      <!-- Delete Button -->\n          <a [routerLink]=\"['/delete-charity/', charity._id]\" *ngIf=\"username === charity.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></a>\n\n\n           <!-- Likes Dropdown  -->\n      <div class=\"dropdown\">\n        <!-- Like Button -->\n        <button (click)=\"likeCharity(charity._id)\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-success\" *ngIf=\"username !== charity.createdBy\" ><span class=\"glyphicon glyphicon-thumbs-up\" >&nbsp;</span>Likes: {{ charity.likes}}</button>\n        <!-- Dropdown Menu Items -->\n        <div class=\"dropdown-content\">\n          <a  *ngFor=\"let liker of charity.likedBy\">{{ liker }}</a>\n\n        </div>\n      </div>\n\n      <!-- Dislikes Dropdown  -->\n      <div class=\"dropdown\">\n        <!-- Dislike Button -->\n        <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" *ngIf=\"username !== charity.createdBy\" (click)=\"dislikeCharity(charity._id)\"><span class=\"glyphicon glyphicon-thumbs-down\">&nbsp;</span>Dislikes: {{ charity.dislikes}}</button>\n        <!-- Dropdown Menu Items -->\n        <div class=\"dropdown-content\">\n          <a  *ngFor=\"let disliker of charity.dislikedBy\">{{ disliker }}</a>\n\n        </div>\n      </div>\n\n    </div>\n    <!-- Panel Footer End -->\n\n    <!-- Post Comment Box: Start -->\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"draftComment(charity._id)\" [disabled]=\"newComment.indexOf(charity._id) > -1\" *ngIf=\"(permission === 'user') || (permission === 'charity')\" >Post Comment</button>\n        <br /><br />\n        <div *ngIf=\"newComment.indexOf(charity._id) > -1\" >\n          <!-- Form: Comment Form Start -->\n          <form [formGroup]=\"commentForm\">\n            <textarea name=\"comment\" rows=\"10\" cols=\"30\" class=\"form-control\" formControlName=\"comment\"></textarea>\n            <!-- Validation -->\n            <div [ngClass]=\"{'has-success': !commentForm.controls.comment.errors && commentForm.controls.comment.dirty, 'has-error': commentForm.controls.comment.dirty && commentForm.controls.comment.errors}\">\n              <ul class=\"help-block\">\n                <li *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">This field is required.</li>\n                <li *ngIf=\"(commentForm.controls.comment.errors?.maxlength && commentForm.controls.comment.dirty) ||(commentForm.controls.comment.errors?.minlength && commentForm.controls.comment.dirty)\">Comment must be at least 1 character but no more than 200.</li>\n              </ul>\n            </div>\n            <!-- Post Button -->\n            <button [disabled]=\"!commentForm.valid || processing\" type=\"submit\" name=\"button\" class=\"btn btn-sm btn-info\" (click)=\"postComment(charity._id)\">Post</button>\n            <!-- Cancel Button -->\n            <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelSubmission(charity._id)\">Cancel</button>\n          </form>\n          <!-- Form: Comment Form End -->\n        </div>\n      <li *ngIf=\"enabledComments.indexOf(charity._id) === -1 && charity.comments.length > 0\" class=\"list-group-item\">\n        <button (click)=\"expand(charity._id)\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">\n          Show comments&nbsp;&nbsp;\n\n        </button>\n        <!-- Hide Comments -->\n      <li *ngIf=\"enabledComments.indexOf(charity._id) > -1\" class=\"list-group-item\">\n        <button (click)=\"collapse(charity._id)\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">\n          Show comments&nbsp;&nbsp;\n\n        </button>\n\n      </li>\n      <!-- Comment -->\n      <div *ngIf=\"enabledComments.indexOf(charity._id) > -1\">\n        <li *ngFor=\"let comment of charity.comments\" class=\"list-group-item\">\n          <strong>{{ comment.commentator }}:</strong> {{ comment.comment }}\n        </li>\n      </div>\n    </ul>\n    <br />\n    <br />\n\n\n  </div>\n  <!-- Panel Outer Layer -->\n</div>\n<!-- Panel End -->\n\n        <div class=\"col-lg-5\">\n          <div class=\"col-lg-11\">\n        <div class=\"row\" style=\"margin-left: 20px\">\n          <br/>\n          <br/>\n          <mdb-carousel [isControls]=\"true\" [animation]=\"'slide'\">\n            <!--First slide-->\n            <mdb-carousel-item>\n              <img class=\"d-block w-100\" src=\"assets/images/10.jpeg\" alt=\"First slide\">\n            </mdb-carousel-item>\n            <!--/First slide-->\n            <!--Second slide-->\n            <mdb-carousel-item>\n              <img class=\"d-block w-100\" src=\"assets/images/11.jpeg\" alt=\"Second slide\">\n            </mdb-carousel-item>\n            <!--/Second slide-->\n            <!--Third slide-->\n            <mdb-carousel-item>\n              <img class=\"d-block w-100\" src=\"assets/images/12.jpeg\" alt=\"Third slide\">\n            </mdb-carousel-item>\n            <!--/Third slide-->\n            <mdb-carousel-item>\n              <img class=\"d-block w-100\" src=\"assets/images/13.jpg\" alt=\"Fourth slide\">\n            </mdb-carousel-item>\n          </mdb-carousel>\n        </div>\n\n        <br/>\n          <br/>\n            <br/>\n            <br/>\n\n          <div class =\"row\" style=\"margin-right: 20px\">\n            <mdb-carousel [isControls]=\"true\" [animation]=\"'slide'\">\n              <!--First slide-->\n              <mdb-carousel-item>\n                <img class=\"d-block w-100\" src=\"assets/images/14.png\" alt=\"First slide\">\n              </mdb-carousel-item>\n              <!--/First slide-->\n              <!--Second slide-->\n              <mdb-carousel-item>\n                <img class=\"d-block w-100\" src=\"assets/images/15.jpeg\" alt=\"Second slide\">\n              </mdb-carousel-item>\n              <!--/Second slide-->\n              <!--Third slide-->\n              <mdb-carousel-item>\n                <img class=\"d-block w-100\" src=\"assets/images/16.jpeg\" alt=\"Third slide\">\n              </mdb-carousel-item>\n              <!--/Third slide-->\n              <mdb-carousel-item>\n                <img class=\"d-block w-100\" src=\"assets/images/18.jpeg\" alt=\"Fourth slide\">\n              </mdb-carousel-item>\n            </mdb-carousel>\n        </div>\n\n            <br/>\n            <br/>\n            <br/>\n            <br/>\n\n            <div class =\"row\" style=\"margin-left: 20px\">\n              <mdb-carousel [isControls]=\"true\" [animation]=\"'slide'\">\n                <!--First slide-->\n                <mdb-carousel-item>\n                  <img class=\"d-block w-100\" src=\"assets/images/19.jpeg\" alt=\"First slide\">\n                </mdb-carousel-item>\n                <!--/First slide-->\n                <!--Second slide-->\n                <mdb-carousel-item>\n                  <img class=\"d-block w-100\" src=\"assets/images/20.jpeg\" alt=\"Second slide\">\n                </mdb-carousel-item>\n                <!--/Second slide-->\n                <!--Third slide-->\n                <mdb-carousel-item>\n                  <img class=\"d-block w-100\" src=\"assets/images/21.jpeg\" alt=\"Third slide\">\n                </mdb-carousel-item>\n                <!--/Third slide-->\n                <mdb-carousel-item>\n                  <img class=\"d-block w-100\" src=\"assets/images/22.jpeg\" alt=\"Fourth slide\">\n                </mdb-carousel-item>\n              </mdb-carousel>\n            </div>\n\n            <br/>\n            <br/>\n            <br/>\n            <br/>\n\n            <div class =\"row\" style=\"margin-right: 20px\">\n              <mdb-carousel [isControls]=\"true\" [animation]=\"'slide'\">\n                <!--First slide-->\n                <mdb-carousel-item>\n                  <img class=\"d-block w-100\" src=\"assets/images/7.jpg\" alt=\"First slide\">\n                </mdb-carousel-item>\n                <!--/First slide-->\n                <!--Second slide-->\n                <mdb-carousel-item>\n                  <img class=\"d-block w-100\" src=\"assets/images/5.png\" alt=\"Second slide\">\n                </mdb-carousel-item>\n                <!--/Second slide-->\n                <!--Third slide-->\n                <mdb-carousel-item>\n                  <img class=\"d-block w-100\" src=\"assets/images/4.jpg\" alt=\"Third slide\">\n                </mdb-carousel-item>\n                <!--/Third slide-->\n                <mdb-carousel-item>\n                  <img class=\"d-block w-100\" src=\"assets/images/6.png\" alt=\"Fourth slide\">\n                </mdb-carousel-item>\n              </mdb-carousel>\n            </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/charity/charity.component.scss":
/***/ (function(module, exports) {

module.exports = "btn btn-dark dropdown-toggle waves-light {\n  background-color: #2e3951; }\n\n/* Dropdown Button */\n\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer; }\n\n/* The container <div> - needed to position the dropdown content */\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n/* Dropdown Content (Hidden by Default) */\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n/* Links inside the dropdown */\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n/* Change color of dropdown links on hover */\n\n.dropdown-content a:hover {\n  background-color: #f1f1f1; }\n\n/* Show the dropdown menu on hover */\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41; }\n"

/***/ }),

/***/ "./src/app/charity/charity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_charity_service__ = __webpack_require__("./src/app/services/charity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharityComponent = /** @class */ (function () {
    function CharityComponent(fb, authService, charityService) {
        this.fb = fb;
        this.authService = authService;
        this.charityService = charityService;
        this.newPost = false;
        this.loadingCharity = false;
        this.processing = false;
        this.newComment = [];
        this.enabledComments = [];
        this.createNewCharityForm(); // Create nepw charity form on start up
        this.createCommentForm();
    }
    // Function to create new charity form
    CharityComponent.prototype.createNewCharityForm = function () {
        this.form = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5),
                    this.alphaNumericValidation
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(500),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)
                ])],
            bitCoin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)
                ])],
            ether: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)
                ])]
        });
    };
    // Create form for posting comments
    CharityComponent.prototype.createCommentForm = function () {
        this.commentForm = this.fb.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(200)
                ])]
        });
    };
    // Enable the comment form
    CharityComponent.prototype.enableCommentForm = function () {
        this.commentForm.get('comment').enable(); // Enable comment field
    };
    // Disable the comment form
    CharityComponent.prototype.disableCommentForm = function () {
        this.commentForm.get('comment').disable(); // Disable comment field
    };
    // Enable new charity form
    CharityComponent.prototype.enableFormNewCharityForm = function () {
        this.form.get('title').enable(); // Enable title field
        this.form.get('body').enable(); // Enable body field
        this.form.get('bitCoin').enable();
        this.form.get('ether').enable();
    };
    // Disable new Charity form
    CharityComponent.prototype.disableFormNewCharityForm = function () {
        this.form.get('title').disable(); // Disable title field
        this.form.get('body').disable(); // Disable body field
        this.form.get('bitCoin').disable();
        this.form.get('ether').disable();
    };
    // Validation for title
    CharityComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
        // Check if test returns false or true
        if (regExp.test(controls.value)) {
            return null; // Return valid
        }
        else {
            return { 'alphaNumericValidation': true }; // Return error in validation
        }
    };
    // Function to display new Charity form
    CharityComponent.prototype.newCharityForm = function () {
        this.newPost = true; // Show new Charity form
    };
    // Reload Charity on current page
    CharityComponent.prototype.reloadCharity = function () {
        var _this = this;
        this.loadingCharity = true; // Used to lock button
        this.getAllCharity(); // Add any new charity to the page
        // Get All Charity
        setTimeout(function () {
            _this.loadingCharity = false; // Release button lock after four seconds
        }, 4000);
    };
    // Function to post a new comment on Charity post
    CharityComponent.prototype.draftComment = function (id) {
        this.commentForm.reset();
        this.newComment = [];
        this.newComment.push(id);
    };
    // Function to cancel new post transaction
    CharityComponent.prototype.cancelSubmission = function (id) {
        var index = this.newComment.indexOf(id); // Check the index of the charity post in the array
        this.newComment.splice(index, 1); // Remove the id from the array to cancel post submission
        this.commentForm.reset(); // Reset  the form after cancellation
        this.enableCommentForm(); // Enable the form after cancellation
        this.processing = false; // Enable any buttons that were locked
    };
    // Function to submit a new Charity post
    CharityComponent.prototype.onCharitySubmit = function () {
        var _this = this;
        this.processing = true; // Disable submit button
        this.disableFormNewCharityForm(); // Lock form
        // Create Charity object from form fields
        var charity = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            bitCoin: this.form.get('bitCoin').value,
            ether: this.form.get('ether').value,
            createdBy: this.username // CreatedBy field
        };
        // Function to save charity into database
        this.charityService.newCharity(charity).subscribe(function (data) {
            // Check if charity was saved to database or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
                _this.processing = false; // Enable submit button
                _this.enableFormNewCharityForm(); // Enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                _this.getAllCharity();
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.newPost = false; // Hide form
                    _this.processing = false; // Enable submit button
                    _this.message = false; // Erase error/success message
                    _this.form.reset(); // Reset all form fields
                    _this.enableFormNewCharityForm(); // Enable the form fields
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    CharityComponent.prototype.goBack = function () {
        window.location.reload(); // Clear all variable states
    };
    CharityComponent.prototype.getAllCharity = function () {
        var _this = this;
        this.charityService.getAllCharity().subscribe(function (data) {
            _this.charityPosts = data.charity;
        });
    };
    // Function to like a charity post
    CharityComponent.prototype.likeCharity = function (id) {
        var _this = this;
        this.charityService.likeCharity(id).subscribe(function (data) {
            _this.getAllCharity();
        });
    };
    // Function to disliked a charity post
    CharityComponent.prototype.dislikeCharity = function (id) {
        var _this = this;
        // Service to dislike a Charity post
        this.charityService.dislikeCharity(id).subscribe(function (data) {
            _this.getAllCharity(); // Refresh charity after dislike
        });
    };
    // Function to post a new comment
    CharityComponent.prototype.postComment = function (id) {
        var _this = this;
        this.disableCommentForm(); // Disable form while saving comment to database
        this.processing = true; // Lock buttons while saving comment to database
        var comment = this.commentForm.get('comment').value; // Get the comment value to pass to service function
        this.charityService.postComment(id, comment).subscribe(function (data) {
            _this.getAllCharity(); // Refresh all charity to reflect the new comment
            var index = _this.newComment.indexOf(id); // Get the index of the charity id to remove from array
            _this.newComment.splice(index, 1); // Remove id from the array
            _this.enableCommentForm(); // Re-enable the form
            _this.commentForm.reset(); // Reset the comment form
            _this.processing = false; // Unlock buttons on comment form
            if (_this.enabledComments.indexOf(id) < 0) {
                _this.expand(id); // Expand comments for user on comment submission
            }
        });
    };
    // Expand the list of comments
    CharityComponent.prototype.expand = function (id) {
        this.enabledComments.push(id); // Add the current charity post id to array
    };
    // Collapse the list of comments
    CharityComponent.prototype.collapse = function (id) {
        var index = this.enabledComments.indexOf(id); // Get position of id in array
        this.enabledComments.splice(index, 1); // Remove id from array
    };
    CharityComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get profile username on page load
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new Charity posts and comments
            _this.permission = profile.user.permission;
        });
        this.getAllCharity();
    };
    CharityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charity',
            template: __webpack_require__("./src/app/charity/charity.component.html"),
            styles: [__webpack_require__("./src/app/charity/charity.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_charity_service__["a" /* CharityService */]])
    ], CharityComponent);
    return CharityComponent;
}());



/***/ }),

/***/ "./src/app/charity/delete-charity/delete-charity.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/charity/delete-charity/delete-charity.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Delete charity</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Modal Confirmation Window -->\n<div class=\"col-md-6\" *ngIf=\"foundCharity\">\n  <!-- Model Outer Layer -->\n  <div class=\"modal-content\">\n    <!-- Modal Header -->\n    <div class=\"modal-header\">\n      <!-- Close Button -->\n       <button type=\"button\" name=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n       <!-- Modal Title -->\n      <h4 class=\"modal-title\">Confirm</h4>\n    </div>\n\n    <!-- Modal Body -->\n    <div class=\"modal-body\">\n      <p>Are you sure you would like to delete this charity?</p>\n    </div>\n\n    <!-- Modal Footer -->\n    <div class=\"modal-footer\">\n      <!-- Yes Button -->\n         <button [disabled]=\"processing\" *ngIf=\"username === charity.createdBy\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteCharity()\">Yes</button>\n          <!-- No Button -->\n        <a routerLink=\"/charity\" *ngIf=\"username === charity.createdBy\"><button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button></a>\n        </div>\n      </div>\n\n      <br />\n\n      <!-- Panel -->\n  <div class=\"panel panel-primary container-fluid  modal-content\">\n    <!-- Panel Heading -->\n    <div class=\"panel-heading\">\n      <!-- Panel Title -->\n\n      <h3 class=\"panel-title\"><strong>Title: </strong>{{ charity.title }}</h3>\n    </div>\n\n\n    <!-- Panel Body -->\n    <div class=\"panel-body\">\n      <strong>Body: </strong>\n      {{ charity.body }}\n    </div>\n    <br />\n    <div class=\"panel-body\">\n      <strong>BitCoin Wallet:     </strong>{{ charity.bitCoin}}\n    </div>\n    <br />\n\n    <div class=\"panel-body\">\n      <strong>Ethereum Wallet:      </strong>{{ charity.ether}}\n    </div>\n    <br />\n\n    <!-- Panel Footer -->\n    <div class=\"panel-footer\">\n      <strong>Posted by: </strong> {{ charity.createdBy }}\n      <br />\n      <strong>Date: </strong> {{ charity.createdAt | date:'MMM dd, yyyy' }}\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/charity/delete-charity/delete-charity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteCharityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_charity_service__ = __webpack_require__("./src/app/services/charity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteCharityComponent = /** @class */ (function () {
    function DeleteCharityComponent(charityService, activatedRoute, authService, router) {
        this.charityService = charityService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
        this.foundCharity = false;
        this.processing = false;
    }
    DeleteCharityComponent.prototype.deleteCharity = function () {
        var _this = this;
        this.processing = true;
        this.charityService.deleteCharity(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/charity']);
                }, 2000);
            }
        });
    };
    DeleteCharityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.charityService.getSingleCharity(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = 'Charity not found ! ';
            }
            else {
                _this.charity = {
                    title: data.charity.title,
                    body: data.charity.body,
                    bitCoin: data.charity.bitCoin,
                    ether: data.charity.ether,
                    createdBy: data.charity.createdBy,
                    createdAt: data.charity.createdAt
                };
                _this.foundCharity = true;
            }
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new Charity posts and comments
            _this.permission = profile.user.permission;
        });
    };
    DeleteCharityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-charity',
            template: __webpack_require__("./src/app/charity/delete-charity/delete-charity.component.html"),
            styles: [__webpack_require__("./src/app/charity/delete-charity/delete-charity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_charity_service__["a" /* CharityService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DeleteCharityComponent);
    return DeleteCharityComponent;
}());



/***/ }),

/***/ "./src/app/charity/edit-charity/edit-charity.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/charity/edit-charity/edit-charity.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Charity</h1>\n\n<!-- Custom Success/Erro Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Edit charity Form -->\n<form (submit)=\"updateCharitySubmit()\" *ngIf=\"!loading\">\n  <!-- Title Field -->\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <!-- Title Input -->\n    <input [disabled]=\"processing\" type=\"text\" id=\"title\" name=\"title\" placeholder=\"*Charity Title\" class=\"form-control\" [(ngModel)]=\"charity.title\" />\n  </div>\n\n  <!-- Body Field -->\n  <div class=\"form-group\">\n    <label for=\"body\">Body</label>\n    <!-- Body Input -->\n    <textarea [disabled]=\"processing\" id=\"body\" name=\"body\" rows=\"8\" cols=\"80\" [(ngModel)]=\"charity.body\" class=\"form-control\" placeholder=\"* Body\"></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"bitCoin\">BitCoin Wallet</label>\n    <!-- bitCoin Wallet Input -->\n    <input [disabled]=\"processing\" type=\"text\" id=\"bitCoin\" name=\"bitCoin\" placeholder=\"*Bitcoin Wallet\" class=\"form-control\" [(ngModel)]=\"charity.bitCoin\" />\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"ether\">Ether Wallet</label>\n    <!-- Ether Wallet Input -->\n    <input [disabled]=\"processing\" type=\"text\" id=\"ether\" name=\"Ether\" placeholder=\"*Ethereum Wallet\" class=\"form-control\" [(ngModel)]=\"charity.ether\" />\n  </div>\n\n\n  <!-- Delete Button -->\n  <!--  <a [routerLink]=\"['/delete-charity/', charity._id]\" *ngIf=\"username === charity.createdBy\"><button  [disabled]=\"processing\"  type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button></a>\n   <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>\n  <!-- Save Changes Button -->\n  <button [disabled]=\"processing\" *ngIf=\"username === charity.createdBy\" type=\"submit\" name=\"save\" class=\"btn btn-info\">Save Changes</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/charity/edit-charity/edit-charity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCharityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_charity_service__ = __webpack_require__("./src/app/services/charity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCharityComponent = /** @class */ (function () {
    function EditCharityComponent(location, activatedRoute, charityService, authService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.charityService = charityService;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    // Function to Submit Update
    EditCharityComponent.prototype.updateCharitySubmit = function () {
        var _this = this;
        this.processing = true;
        this.charityService.editCharity(this.charity).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                _this.message = data.message; // Set error message
                _this.processing = false; // Unlock form fields
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set success bootstrap class
                _this.message = data.message; // Set success message
                // After two seconds, navigate back to charityList page
                setTimeout(function () {
                    _this.router.navigate(['/charity']); // Navigate back to route page
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    EditCharityComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditCharityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
        // Function to GET current charity with id in params
        this.charityService.getSingleCharity(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = 'Charity not found ! ';
            }
            else {
                _this.charity = data.charity; // Save charity object for use in HTML
                _this.loading = false;
            }
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new Charity posts and comments
            _this.permission = profile.user.permission;
        });
    };
    EditCharityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-charity',
            template: __webpack_require__("./src/app/charity/edit-charity/edit-charity.component.html"),
            styles: [__webpack_require__("./src/app/charity/edit-charity/edit-charity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_charity_service__["a" /* CharityService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditCharityComponent);
    return EditCharityComponent;
}());



/***/ }),

/***/ "./src/app/charity/new-charity/new-charity.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/charity/new-charity/new-charity.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header text-center\">Charity List</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- New Post Button -->\n\n<a  *ngIf=\"permission === 'charity'\">\n  <button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newCharityForm()\">New Post</button> </a>\n<!--<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newCharityForm()\">New Post</button> -->\n\n<br />\n<br />\n\n\n<!-- New Charity Form -->\n<form [formGroup]=\"form\" name=\"charityForm\" (submit)=\"onCharitySubmit()\" *ngIf=\"newPost\">\n  <!-- Title Input -->\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors}\">\n      <input type=\"text\" name=\"title\" class=\"form-control\" id=\"title\" placeholder=\"*Charity Title\" autocomplete=\"off\" formControlName=\"title\" />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\n        <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">Max length: 50, Min length: 5</li>\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Body Input -->\n  <div class=\"form-group\">\n    <label for=\"body\">Body</label>\n    <div [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors}\">\n      <textarea  name=\"body\" rows=\"8\" cols=\"80\" id=\"body\" placeholder=\"*Body\" class=\"form-control\" formControlName=\"body\"></textarea>\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required.</li>\n        <li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">Max length: 500, Min length: 5</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"bitCoin\">bitCoin Wallet</label>\n    <div >\n      <input type=\"text\" name=\"bitCoin\" class=\"form-control\" id=\"bitCoin\" placeholder=\"*bitCoin Wallet\" autocomplete=\"off\" formControlName=\"bitCoin\" />\n\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"ether\">ether Wallet</label>\n    <div >\n      <input type=\"text\" name=\"ether\" class=\"form-control\" id=\"ether\" placeholder=\"*ether Wallet\" autocomplete=\"off\" formControlName=\"ether\" />\n\n    </div>\n  </div>\n\n\n\n  <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back</button>\n  <!-- Submit Button -->\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\n\n</form>\n<!-- New Charity Form -->\n"

/***/ }),

/***/ "./src/app/charity/new-charity/new-charity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCharityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_charity_service__ = __webpack_require__("./src/app/services/charity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewCharityComponent = /** @class */ (function () {
    function NewCharityComponent(fb, authService, charityService) {
        this.fb = fb;
        this.authService = authService;
        this.charityService = charityService;
        this.newPost = false;
        this.loadingCharity = false;
        this.processing = false;
        this.createNewCharityForm();
    }
    NewCharityComponent.prototype.createNewCharityForm = function () {
        this.form = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5),
                    this.alphaNumericValidation
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(500),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)
                ])],
            bitCoin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)
                ])],
            ether: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)
                ])]
        });
    };
    // Enable new charity form
    NewCharityComponent.prototype.enableFormNewCharityForm = function () {
        this.form.get('title').enable(); // Enable title field
        this.form.get('body').enable(); // Enable body field
        this.form.get('bitCoin').enable();
        this.form.get('ether').enable();
    };
    // Disable new Charity form
    NewCharityComponent.prototype.disableFormNewCharityForm = function () {
        this.form.get('title').disable(); // Disable title field
        this.form.get('body').disable(); // Disable body field
        this.form.get('bitCoin').disable();
        this.form.get('ether').disable();
    };
    // Validation for title
    NewCharityComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
        // Check if test returns false or true
        if (regExp.test(controls.value)) {
            return null; // Return valid
        }
        else {
            return { 'alphaNumericValidation': true }; // Return error in validation
        }
    };
    // Function to display new Charity form
    NewCharityComponent.prototype.newCharityForm = function () {
        this.newPost = true; // Show new Charity form
    };
    NewCharityComponent.prototype.onCharitySubmit = function () {
        var _this = this;
        this.processing = true; // Disable submit button
        this.disableFormNewCharityForm(); // Lock form
        // Create Charity object from form fields
        var charity = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            bitCoin: this.form.get('bitCoin').value,
            ether: this.form.get('ether').value,
            createdBy: this.username // CreatedBy field
        };
        // Function to save charity into database
        this.charityService.newCharity(charity).subscribe(function (data) {
            // Check if charity was saved to database or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
                _this.processing = false; // Enable submit button
                _this.enableFormNewCharityForm(); // Enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.newPost = false; // Hide form
                    _this.processing = false; // Enable submit button
                    _this.message = false; // Erase error/success message
                    _this.form.reset(); // Reset all form fields
                    _this.enableFormNewCharityForm(); // Enable the form fields
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    NewCharityComponent.prototype.goBack = function () {
        window.location.reload(); // Clear all variable states
    };
    NewCharityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new Charity posts and comments
            _this.permission = profile.user.permission;
        });
    };
    NewCharityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-charity',
            template: __webpack_require__("./src/app/charity/new-charity/new-charity.component.html"),
            styles: [__webpack_require__("./src/app/charity/new-charity/new-charity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_charity_service__["a" /* CharityService */]])
    ], NewCharityComponent);
    return NewCharityComponent;
}());



/***/ }),

/***/ "./src/app/charitydashboard/charitydashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-item\n{\n  margin-left: auto\n}\n\n.visible {\n  margin: 20px;\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: 1.2;\n  color: black;\n  text-align: center;\n  background-color: white !important;\n}\n\n#page-top {\n  background-color: ghostwhite;\n}\n\n#mainNav {\n  background-color: rgb(255, 107, 74);\n}\n\n/* Style the links inside the navigation bar */\n\n"

/***/ }),

/***/ "./src/app/charitydashboard/charitydashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<head xmlns=\"http://www.w3.org/1999/html\">\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js\" integrity=\"sha256-J2sc79NPV/osLcIpzL3K8uJyAD7T5gaEFKlLDM18oxY=\" crossorigin=\"anonymous\"></script>\n\n  <title>Dashboard</title>\n</head>\n\n<body class=\"fixed-nav sticky-footer\" id=\"page-top\">\n<!-- Navigation-->\n<nav class=\"navbar navbar-expand-lg  fixed-top\" id=\"mainNav\">\n  <links>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"navbar-brand\" style=\"color:black\" ><h2>CHARITY DASHBOARD</h2></a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/charity\" style=\"color: black\">\n          <i class=\"fa fa-fw fa-sign-out\"></i><strong>Go back</strong></a>\n      </li>\n    </ul>\n  </links>\n</nav>\n\n<br>\n<br>\n<br>\n\n<!-- Body -->\n<div *ngIf=\"user\">\n  <br/>\n  <br/>\n  <br/>\n  <strong  style=\"color:black; margin-left: 100px;\"><i class=\"fa fa-archive\"></i> Your Address: </strong>\n  <div class= \"row\"><h4 class=\"address\" style=\"margin-left: 200px; color: black\" > {{user.name}}&ensp; </h4><i class=\"fa fa-copy\"></i></div>\n  <br>\n  <br>\n  <br>\n  <div class=\"content-wrapper\">\n    <div class=\"container-fluid\">\n      <div class=\"col-lg-12\">\n\n      <div class=\"row\">\n\n        <div class=\"col-lg-7\">\n          <div class=\"card mb-3\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-table\"></i>&nbsp;Account Table</div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                  <thead>\n                  <tr>\n                    <th>Address</th>\n                    <th>Number of Transaction</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <td><p style=\"color:red\">{{resultinfo[0].account}}</p></td>\n                    <td style=\"color:red\" *ngFor=\"let posts of (traninfo | slice: -1); let i = index\"><strong>\n                      {{traninfo.length}}&ensp; txns\n                    </strong></td>\n                  </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n          <br>\n          <br>\n          <div class=\"card mb-3\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-table\"></i>&nbsp;Fund Table</div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                  <thead>\n                  <tr>\n                    <th>Amount of Ether</th>\n                    <th>Amount of AUD</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <td><p style=\"color:red\">{{resultinfo[0].balance*0.000000000000000001}}&nbsp;&nbsp;Ether</p></td>\n                    <td><p style=\"color:red\">{{resultinfo[0].balance*0.000000000000000001*cryptos.ETH.AUD | currency: 'AUD':'symbol-narrow'}}&nbsp;&nbsp;AUD</p></td>\n                  </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n\n          <br>\n\n          <div class =\"topmax\">\n            <p style=\"color: black\">Amount of expected Ether for charity :</p>\n            <input id=\"maxvalue\" [(ngModel)]=\"maxvalue\"/>\n            <button (click)=\"sendmaxvalue()\"  aria-hidden=\"true\"> Set Max</button>\n          </div>\n\n        <div [hidden]=\"!chart\">\n          <canvas id=\"canvas\">{{ chart }}</canvas>\n        </div>\n        </div>\n          <!-- Price Table -->\n          <div class=\"col-lg-4\" style=\"background-color: ghostwhite; text-align: center; margin-left: 100px\">\n          <div class=\"card\">\n            <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Price table</h3>\n            <div class=\"card-body\">\n              <div  class=\"table-editable\">\n                <table class=\"table table-bordered  table-striped text-center\">\n                  <tr>\n\n                    <th class=\"text-center\">Coins</th>\n                    <th class=\"text-center\">USD</th>\n                    <th class=\"text-center\">AUD</th>\n\n\n                  </tr>\n                  <tr *ngFor=\"let crypto of objectKeys(cryptos)\">\n\n                    <td class=\"text-center\">{{ crypto }}</td>\n                    <td class=\"text-center\">{{ cryptos[crypto].USD | currency: 'USD':'symbol-narrow'}}</td>\n                    <td class=\"text-center\">{{cryptos[crypto].AUD | currency: 'AUD':'symbol-narrow'}}</td>\n\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n        <br>\n        <br>\n        <!-- Transaction-->\n          <div class=\"visible\" >\n            <h3><strong> Table Transaction </strong></h3>\n            <table class=\"table table-responsive table-hover\">\n              <thead class=\"mdb-color darken-5\">\n              <tr class=\"text-white\">\n                <td align=\"center\">BlockNumber</td>\n                <td align=\"center\">Date</td>\n                <td align=\"center\">From</td>\n                <td align=\"center\">To</td>\n                <td align=\"center\">Value</td>\n                <td align=\"center\">Fee</td>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let posts of traninfo\">\n                <td align=\"center\" style=\"color:rgb(255, 107, 74)\">{{posts.blockNumber}}</td>\n                <td align=\"center\">{{posts.timeStamp*1000 | date:'mediumDate'}} </td>\n                <td align=\"center\">{{posts.from}}</td>\n                <td align=\"center\" style=\"color:rgb(255, 107, 74)\">{{posts.to}}</td>\n                <td align=\"center\">{{posts.value*0.000000000000000001}}</td>\n                <td align=\"center\">{{posts.gasPrice*posts.gasUsed*0.000000000000000001 | number : '1.2-9'}}</td>\n              </tr>\n              </tbody>\n            </table>\n\n          </div>\n\n          <br>\n          <br>\n\n\n\n          <!--<div class=\"visible\" >\n\n            <table class=\"table table-responsive table-hover\">\n              <thead class=\"mdb-color darken-3\">\n              <tr class=\"text-white\">\n                <td align=\"center\">BlockNumber</td>\n                <td align=\"center\">Date</td>\n                <td align=\"center\">From</td>\n                <td align=\"center\">To</td>\n                <td align=\"center\">Value</td>\n                <td align=\"center\">Fee</td>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let posts of intrans\">\n                <td align=\"center\">{{posts.blockNumber}}</td>\n                <td align=\"center\">{{posts.timeStamp*1000 | date:'mediumDate'}} </td>\n                <td align=\"center\">{{posts.from}}</td>\n                <td align=\"center\">{{posts.to}}</td>\n                <td align=\"center\">{{posts.value*0.000000000000000001}}</td>\n                <td align=\"center\">{{posts.gasPrice*posts.gasUsed*0.000000000000000001}}</td>\n              </tr>\n              </tbody>\n            </table>\n\n          </div> -->\n\n\n\n        </div>\n\n\n\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n\n</body>\n\n<!-- Bootstrap core JavaScript-->\n<script src=\"vendor/jquery/jquery.min.js\"></script>\n<script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n<!-- Core plugin JavaScript-->\n<script src=\"vendor/jquery-easing/jquery.easing.min.js\"></script>\n<!-- Page level plugin JavaScript-->\n<script src=\"vendor/chart.js/Chart.min.js\"></script>\n<script src=\"vendor/datatables/jquery.dataTables.js\"></script>\n<script src=\"vendor/datatables/dataTables.bootstrap4.js\"></script>\n<!-- Custom scripts for all pages-->\n<script src=\"js/sb-admin.min.js\"></script>\n<!-- Custom scripts for this page-->\n<script src=\"js/sb-admin-datatables.min.js\"></script>\n<script src=\"js/sb-admin-charts.min.js\"></script>\n\n\n\n<!-- /.container-fluid-->\n<!-- /.content-wrapper-->\n\n\n\n\n\n\n<!-- Editable table -->\n\n<!-- Editable table -->\n\n\n<footer class=\"sticky-footer\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <small>Copyright © Reliance Website 2018</small>\n    </div>\n  </div>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/charitydashboard/charitydashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharitydashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("./node_modules/chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_transaction_service__ = __webpack_require__("./src/app/services/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_internaltrans_service__ = __webpack_require__("./src/app/services/internaltrans.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CharitydashboardComponent = /** @class */ (function () {
    //public user.name: string;
    function CharitydashboardComponent(data, appService, transactionService, internaltransService, authService) {
        this.data = data;
        this.appService = appService;
        this.transactionService = transactionService;
        this.internaltransService = internaltransService;
        this.authService = authService;
        this.objectKeys = Object.keys;
        this.num = this.number + 1;
        this.chart = [];
        this.show = false;
    }
    CharitydashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get price crypto table
        this.data.getPrice()
            .subscribe(function (res) {
            _this.cryptos = res;
            console.log(res);
        });
        // Get User Address
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Get Account Balance and Line Chart
    CharitydashboardComponent.prototype.sendmaxvalue = function () {
        var _this = this;
        this.appService.getBalances(this.user['name'])
            .subscribe(function (temp) {
            var max1 = temp.result[0].balance * 0.000000000000000001;
            _this.resultinfo = temp.result;
            console.log(temp.result);
            console.log(_this.etherwallet);
            _this.chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__('canvas', {
                type: 'line',
                data: {
                    labels: ['Min', max1, 'Max'],
                    datasets: [
                        { label: 'charity wallet',
                            data: [0, max1, _this.maxvalue],
                            borderColor: 'red'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                                display: true,
                                ticks: {
                                    min: 0,
                                    max: _this.data[3],
                                }
                            }]
                    }
                }
            });
        });
        // Get Transaction
        this.transactionService.getTrans(this.user['name'])
            .subscribe(function (temp) {
            _this.traninfo = temp.result;
            console.log(temp.result);
        });
        // Get internal transaction
        this.internaltransService.getInTrans(this.user['name'])
            .subscribe(function (temp) {
            _this.intrans = temp.result;
            console.log(temp.result);
        });
    };
    CharitydashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charitydashboard',
            template: __webpack_require__("./src/app/charitydashboard/charitydashboard.component.html"),
            styles: [__webpack_require__("./src/app/charitydashboard/charitydashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_4__services_transaction_service__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_5__services_internaltrans_service__["a" /* InternaltransService */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]])
    ], CharitydashboardComponent);
    return CharitydashboardComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <br>\n  <br>\n\n  <h2><strong>CONTACT US</strong></h2>\n  <br>\n  <form (ngSubmit)=\"contactForm(form.value)\" #form=\"ngForm\">\n    <div class=\"form-group\">\n      <label>UserName</label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" ngModel>\n    </div>\n    <div class=\"form-group\">\n      <label>Subject</label>\n      <input type=\"text\" class=\"form-control\" name=\"text\" ngModel>\n    </div>\n    <div class=\"form-group\">\n      <label>UserEmail</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" ngModel>\n    </div>\n    <div class=\"form-group\">\n      <label>Message</label>\n      <textarea class=\"form-control\" cols=\"30\" rows=\"5\" name=\"message\" ngModel></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert__ = __webpack_require__("./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var swal = __WEBPACK_IMPORTED_MODULE_2_sweetalert__;
var ContactComponent = /** @class */ (function () {
    function ContactComponent(_MessageService) {
        this._MessageService = _MessageService;
    }
    // message function
    ContactComponent.prototype.contactForm = function (form) {
        this._MessageService.sendMessage(form).subscribe(function () {
            swal("Your message has been sent to us", "Thanks for giving question  :)", 'success');
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-item\n{\n  margin: 0 auto;\n\n\n}\n\n#mainNav\n{\n  background-color: cornflowerblue;\n}\n\n.visible {\n  margin: 20px;\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: 1.2;\n  color:black;\n  text-align: center;\n  background-color: white !important;\n}\n\n.inner{\n  width: 100px;\n  height: 30px;\n  margin-left: 50px;\n}\n\n.inner1{\n  width: 170px;\n  height: 30px;\n  background-color: cornflowerblue;\n  color:white;\n  margin-left: 170px;\n}\n\n#etherwallet {\n  width: 400px;\n  height:30px;\n  margin: 20px;\n  text-align: center;\n}\n\n/* Style the links inside the navigation bar */\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<head xmlns=\"http://www.w3.org/1999/html\">\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js\"\n          integrity=\"sha256-J2sc79NPV/osLcIpzL3K8uJyAD7T5gaEFKlLDM18oxY=\" crossorigin=\"anonymous\"></script>\n  <title>Dashboard</title>\n</head>\n\n<body class=\"fixed-nav sticky-footer\" id=\"page-top\">\n<!-- Navigation-->\n<nav class=\"navbar navbar-expand-lg  fixed-top\" id=\"mainNav\">\n  <links>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"navbar-brand\" style=\"color:white\" ><h2>USER DASHBOARD</h2></a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"\" style=\"color: white\">\n          <i class=\"fa fa-fw fa-sign-out\"></i><strong>Go back</strong></a>\n      </li>\n    </ul>\n\n  </links>\n</nav>\n\n<br>\n<br>\n<br>\n\n\n<!-- Body -->\n\n<div *ngIf=\"user\">\n  <br/>\n  <br/>\n  <br/>\n  <strong  style=\"color:black; margin-left: 100px;\"><i class=\"fa fa-archive\"></i> Your Address: </strong>\n  <div class= \"row\"><h4 class=\"address\" style=\"margin-left: 200px; color: black\" > {{user.name}}&ensp; </h4><i class=\"fa fa-copy\"></i></div>\n\n\n\n<!--<div class =\"topnav\">\n<input id=\"etherwallet\"  [(ngModel)]=\"user.name\"/>\n<button (click)=\"sendValues()\" aria-hidden=\"true\">Search</button>\n</div> -->\n\n</div>\n<br/>\n<br/>\n\n<div class=\"col-md-6\" style=\"margin-bottom: -3px; margin-left:100px\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th colspan=\"2\">\n        <button class=\"inner\" (click)=\"sendValues()\" id=\"bt\"><strong>Overview</strong>\n          </button>\n      </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td><strong>\n        Balance:</strong>\n      </td>\n\n      <td><div style=\"color:red\"><strong>{{resultinfo[0].balance*0.000000000000000001}}&nbsp;&nbsp;&nbsp;Ether </strong></div></td>\n\n    </tr>\n    <tr>\n      <td><strong>\n        Price:</strong>\n      </td>\n\n      <td><div style=\"color:red\"><strong>{{resultinfo[0].balance*0.000000000000000001*cryptos.ETH.AUD | currency: 'AUD':'symbol-narrow'}}&nbsp;&nbsp;AUD</strong></div></td>\n\n    </tr>\n    <tr>\n      <td><strong>\n        Transactions:</strong>\n      </td>\n      <td>\n\n        <div style=\"color:red\" *ngFor=\"let posts of (traninfo | slice: -1); let i = index\"><strong>\n          {{traninfo.length}}&ensp; txns\n        </strong></div>\n\n      </td>\n    </tr>\n\n    </tbody></table>\n</div>\n\n\n    <div *ngIf=\"show\">\n\n\n      <div class=\"content-wrapper\">\n        <div class=\"container-fluid\">\n\n          <!-- Area Charts -->\n          <br/>\n          <br/>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <!-- Bar Chart -->\n\n\n\n              <!--<div class=\"card\">\n                <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Price table</h3>\n                <div class=\"card-body\">\n                  <div  class=\"table-editable\">\n                    <table class=\"table table-bordered  table-striped text-center\">\n                      <tr>\n\n                        <th class=\"text-center\">Coins</th>\n                        <th class=\"text-center\">USD</th>\n                        <th class=\"text-center\">AUD</th>\n\n                      </tr>\n                      <tr *ngFor=\"let crypto of objectKeys(cryptos)\">\n\n                        <td class=\"text-center\">{{ crypto }}</td>\n                        <td class=\"text-center\">{{ cryptos[crypto].USD | currency: 'USD':'symbol-narrow'}}</td>\n                        <td class=\"text-center\">{{cryptos[crypto].AUD | currency: 'AUD':'symbol-narrow'}}</td>\n                      </tr>\n                    </table>\n                  </div>\n                </div>\n              </div>-->\n\n              <br/>\n              <br/>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n<br/>\n<br/>\n              <button class=\"inner1\" (click)=\"toggle1()\"  id=\"bt1\">\n                {{buttonName1}} </button>\n              <div *ngIf=\"show1\">\n                <br/>\n\n\n                <!-- Transaction -->\n              <div class=\"visible\" >\n                <h3><strong> Table Transaction </strong></h3>\n                <table class=\"table table-responsive table-hover col-lg-12\" style=\"max-width: 100%\">\n                  <thead class=\"mdb-color darken-6\">\n                  <tr class=\"text-white\">\n\n                    <td align=\"center\">BlockNumber</td>\n                    <td align=\"center\">Date</td>\n                    <td align=\"center\">From</td>\n                    <td align=\"center\">To</td>\n                    <td align=\"center\">Value</td>\n                    <td align=\"center\">TxFee</td>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr *ngFor=\"let posts of traninfo;index as i\">\n\n                    <td align=\"center\" style=\"color:cornflowerblue\">{{posts.blockNumber}}</td>\n                    <td align=\"center\">{{posts.timeStamp*1000 | date:'mediumDate'}} </td>\n                    <td align=\"center\">{{posts.from}}</td>\n                    <td align=\"center\" style=\"color:cornflowerblue\">{{posts.to}}</td>\n                    <td align=\"center\">{{posts.value*0.000000000000000001}}</td>\n                    <td align=\"center\">{{posts.gasPrice*posts.gasUsed*0.000000000000000001 | number : '1.2-9'}}</td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </div>\n\n\n              <br>\n              <br>\n\n              <!-- Internal Trans\n\n              <div class=\"visible\" >\n\n                <table class=\"table table-responsive table-hover\">\n                  <thead class=\"mdb-color darken-3\">\n                  <tr class=\"text-white\">\n                    <td align=\"center\">BlockNumber</td>\n                    <td align=\"center\">Date</td>\n                    <td align=\"center\">From</td>\n                    <td align=\"center\">To</td>\n                    <td align=\"center\">Value</td>\n                    <td align=\"center\">Fee</td>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr *ngFor=\"let posts of intrans\">\n                    <td align=\"center\">{{posts.blockNumber}}</td>\n                    <td align=\"center\">{{posts.timeStamp*1000 | date:'mediumDate'}} </td>\n                    <td align=\"center\">{{posts.from}}</td>\n                    <td align=\"center\">{{posts.to}}</td>\n                    <td align=\"center\">{{posts.value*0.000000000000000001}}</td>\n                    <td align=\"center\">{{posts.gasPrice*posts.gasUsed*0.000000000000000001}}</td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </div> -->\n\n\n\n            </div>\n\n\n\n</body>\n\n<!-- Bootstrap core JavaScript-->\n<script src=\"vendor/jquery/jquery.min.js\"></script>\n<script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n<!-- Core plugin JavaScript-->\n<script src=\"vendor/jquery-easing/jquery.easing.min.js\"></script>\n<!-- Page level plugin JavaScript-->\n<script src=\"vendor/chart.js/Chart.min.js\"></script>\n<script src=\"vendor/datatables/jquery.dataTables.js\"></script>\n<script src=\"vendor/datatables/dataTables.bootstrap4.js\"></script>\n<!-- Custom scripts for all pages-->\n<script src=\"js/sb-admin.min.js\"></script>\n<!-- Custom scripts for this page-->\n<script src=\"js/sb-admin-datatables.min.js\"></script>\n<script src=\"js/sb-admin-charts.min.js\"></script>\n\n\n\n  <!-- /.container-fluid-->\n  <!-- /.content-wrapper-->\n\n\n\n<!-- Editable table -->\n\n<!-- Editable table -->\n\n\n<footer class=\"sticky-footer\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <small>Copyright © Reliance Website 2018</small>\n    </div>\n  </div>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_transaction_service__ = __webpack_require__("./src/app/services/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_internaltrans_service__ = __webpack_require__("./src/app/services/internaltrans.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    //public user.name: string;
    function DashboardComponent(data, appService, transactionService, internaltransService, authService, router) {
        this.data = data;
        this.appService = appService;
        this.transactionService = transactionService;
        this.internaltransService = internaltransService;
        this.authService = authService;
        this.router = router;
        this.objectKeys = Object.keys;
        this.num = this.number + 1;
        this.chart = [];
        this.show = false;
        this.show1 = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPrice()
            .subscribe(function (res) {
            _this.cryptos = res;
            console.log(res);
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.sendValues = function () {
        var _this = this;
        this.appService.getBalances(this.user['name'])
            .subscribe(function (temp) {
            _this.resultinfo = temp.result;
            console.log(temp.result);
            console.log(_this.etherwallet);
        });
        this.transactionService.getTrans(this.user['name'])
            .subscribe(function (temp) {
            _this.traninfo = temp.result;
            console.log(temp.result);
        });
        this.internaltransService.getInTrans(this.user['name'])
            .subscribe(function (temp) {
            _this.intrans = temp.result;
            console.log(temp.result);
        });
    };
    DashboardComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show) {
            this.buttonName = 'TRANSACTIONS';
        }
        else {
            this.buttonName = '';
        }
    };
    DashboardComponent.prototype.toggle1 = function () {
        this.show1 = !this.show1;
        if (this.show1) {
            this.buttonName1 = 'TRANSACTIONS';
        }
        else {
            this.buttonName1 = '';
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_3__services_transaction_service__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_internaltrans_service__["a" /* InternaltransService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/donation/donation.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* Add padding to containers */\n\n.container {\n  padding: 16px;\n  background-color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Full-width input fields */\n\n.inputfield {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n.inputfield:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n.tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: \t#00FF00;\n  float: left;\n  border: none;\n  outline: none;\n  padding: 14px 16px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  font-size: 16px;\n  width :100%\n}\n\n.tab b {\n  padding-right: 16px;\n}\n\n.tab span{\n  float: right;\n}\n\n/* Overwrite default styles of hr */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\ntextarea {\n  height : 120px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Set a style for the submit button */\n\n.trfbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 10px;\n  border: none;\n  cursor: pointer;\n  width: 30%;\n  opacity: 0.9;\n  float: right;\n}\n\n.trfbtn:hover {\n  opacity: 1;\n}\n\n.resetbtn {\n  background-color: grey;\n}\n\n/* Add a blue text color to links */\n\na {\n  color: dodgerblue;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/donation/donation.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n<div style=\"text-align:center\">\n  <h1>\n    <strong>\n    Welcome to {{title}}!\n    </strong>\n  </h1>\n</div>\n<form>\n  <div class=\"container\">\n    <div class=\"tab\">\n      <b><strong> Address:</strong></b>{{transferFrom}} <span class=\"tab-right\">\n      <b><strong>Balance:</strong></b>{{balance}}</span>\n    </div>\n\n    <hr>\n    <br>\n    <br>\n    <label for=\"transfer\"><b>Tranfer To</b></label>\n    <input type=\"text\" class=\"inputfield\" placeholder=\"Address\"  [(ngModel)]=\"transferTo\" name=\"transferTo\" required>\n\n    <label for=\"amount\"><b>Amount in Ether</b></label>\n    <input type=\"text\"  class=\"inputfield\" placeholder=\"Enter Ether\"  [(ngModel)]=\"amount\" name=\"amount\" required>\n\n    <hr>\n    <button type=\"reset\" class=\"trfbtn resetbtn\">Reset</button>&nbsp;&nbsp;\n    <button type=\"submit\" class=\"trfbtn\" (click)=\"transferEther($event)\">Transfer Ether</button>&nbsp;&nbsp;\n  </div>\n\n</form>\n\n<br>\n<br>\n\n\n<a *ngIf=\"balance=='0'; else templateName\">\n<div class=\"options text-center\" >\n  <a href=\"https://metamask.io/\" target=\"_blank\"><strong style=\"color:red\">Don't have a wallet ? Or Not enough Ether ?</strong></a></div></a>\n\n<ng-template #templateName>\n  <strong style=\"color:#4CAF50; margin-left: 420px\">Congratulation! Your wallet is ready to donate !!!</strong>\n</ng-template>\n\n\n\n<br>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/donation/donation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ethcontract_service__ = __webpack_require__("./src/app/services/ethcontract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonationComponent = /** @class */ (function () {
    function DonationComponent(ethcontractService) {
        var _this = this;
        this.ethcontractService = ethcontractService;
        this.title = 'your donation';
        this.transferFrom = '0x0';
        this.balance = '0 ETH';
        this.transferTo = '';
        this.amount = 0;
        // Get Account Info
        this.initAndDisplayAccount = function () {
            var that = _this;
            _this.ethcontractService.getAccountInfo().then(function (acctInfo) {
                console.log(acctInfo);
                that.transferFrom = acctInfo.fromAccount;
                that.balance = acctInfo.balance;
            }).catch(function (error) {
                console.log(error);
            });
        };
        this.initAndDisplayAccount();
    }
    // Transfer Action
    DonationComponent.prototype.transferEther = function (event) {
        var that = this;
        console.log(this.transferTo);
        this.ethcontractService.transferEther(this.transferFrom, this.transferTo, this.amount).then(function () {
            that.initAndDisplayAccount();
        }).catch(function (error) {
            console.log(error);
            that.initAndDisplayAccount();
        });
    };
    DonationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/donation/donation.component.html"),
            styles: [__webpack_require__("./src/app/donation/donation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ethcontract_service__["a" /* EthcontractService */]])
    ], DonationComponent);
    return DonationComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_service__ = __webpack_require__("./src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(adminService, router) {
        this.adminService = adminService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.adminService.logged()) {
            return true;
        }
        else {
            this.router.navigate(['/admin']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/permission.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionGuard = /** @class */ (function () {
    function PermissionGuard(authService, router, validateService) {
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
    }
    PermissionGuard.prototype.canActivate = function () {
        if (this.authService.checkPermission()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    PermissionGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]])
    ], PermissionGuard);
    return PermissionGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".view {\n  background: url('home.a60509a33a5846190e14.jpg') no-repeat center center;\n  background-size: cover;\n  height: 70vh;\n}\n\nh1{\n  font-size: 75px;\n}\n\nh2{\n  font-size: 50px;\n}\n\n.full\n{\n  background: url('aaaa.f7254a1fa965610c7b07.jpg') no-repeat center center fixed;\n  background-size: cover;\n  margin-bottom: 8px;\n}\n\nbody\n{\n  background-color: whitesmoke;\n}\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <!-- Main -->\n  <div class=\"view\">\n    <div class=\"full-bg-img\">\n      <div class=\"mask rgba-black-light flex-center\">\n        <div class=\"container text-center white-text \">\n          <div class=\"white-text text-center wow fadeInUp\">\n            <h1>WE MAKE CHARITY</h1>\n            <h2>CLEAR AND SIMPLE</h2>\n            <h4>Now you can donate cryptocurrency </h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.Main -->\n</header>\n<body>\n<!--Main Layout-->\n\n\n\n\n<main class=\"text-center py-5 \">\n\n  <div class=\"container \">\n    <div class=\"row\">\n      <div class=\"col-sm-8 \">\n\n        <!--Carousel Wrapper-->\n        <mdb-carousel [isControls]=\"true\" [animation]=\"'slide'\">\n          <!--First slide-->\n          <mdb-carousel-item>\n            <img class=\"d-block w-100\" src=\"assets/images/1.jpg\" alt=\"First slide\">\n            <div class=\"carousel-caption\" style=\"color:black\">\n              <p><strong>We are helping</strong></p>\n            </div>\n          </mdb-carousel-item>\n          <!--/First slide-->\n          <!--Second slide-->\n          <mdb-carousel-item>\n            <img class=\"d-block w-100\" src=\"assets/images/2.jpg\" alt=\"Second slide\">\n            <div class=\"carousel-caption\" style=\"color:black\">\n              <p><strong>Save the children</strong></p>\n            </div>\n          </mdb-carousel-item>\n          <!--/Second slide-->\n          <!--Third slide-->\n          <mdb-carousel-item>\n            <img class=\"d-block w-100\" src=\"assets/images/3.jpeg\" alt=\"Third slide\">\n            <div class=\"carousel-caption\" style=\"color:black\">\n              <p><strong>Save the world</strong></p>\n            </div>\n          </mdb-carousel-item>\n          <!--/Third slide-->\n          <mdb-carousel-item>\n            <img class=\"d-block w-100\" src=\"assets/images/22.jpeg\" alt=\"Third slide\">\n            <div class=\"carousel-caption\" style=\"color:black\">\n              <p><strong>With CryptoCurrency</strong></p>\n            </div>\n          </mdb-carousel-item>\n        </mdb-carousel>\n        <!--/.Carousel Wrapper-->\n\n\n\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"row pt-5\">\n        <p align=\"center\">We make a Highest Secured Transfer System for your Cryptocurrency\n          <button type=\"button\" class=\"btn btn-elegant waves-light\" mdbWavesEffect routerLink=\"donation\">Donate Now</button>\n        </p>\n        </div>\n        <div class=\"row pt-3\">\n        <p align=\"center\"> The Children's Charity for children in need\n          <button type=\"button\" class=\"btn btn-elegant waves-light\" mdbWavesEffect routerLink=\"charity\">Our Charity List</button>\n        </p>\n      </div>\n        <div class=\"row pt-3\">\n          <p align=\"center\"> If this is your first time with us?\n            <button type=\"button\" class=\"btn btn-elegant waves-light\" mdbWavesEffect routerLink=\"userguide\">Go User Guide</button>\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</main>\n\n\n<!--Section: Features v.3-->\n<section>\n\n  <!--Section heading-->\n  <h2 class=\"py-5 font-weight-bold text-center\">Why is it so great?</h2>\n  <!--Section description-->\n  <h4 class=\"px-5 mb-5 pb-3 lead grey-text text-center\">Here are the 3 good reasons why it is important</h4>\n\n  <!--Grid row-->\n  <div class=\"row pt-2 mr-3\">\n\n    <!--Grid column-->\n    <div class=\" col-lg-4\">\n      <img src=\"assets/images/6.png\" alt=\"\" class=\"img-fluid z-depth-2 rounded img-thumbnail\" style=\"margin-left:30px\">\n      <br>\n      <br>\n      <br>\n      <br>\n      <img src=\"assets/images/4.jpg\" alt=\"\" class=\"img-fluid z-depth-2 rounded img-thumbnail\" style=\"margin-left:30px\">\n    </div>\n    <!--Grid column-->\n\n    <!--Grid column-->\n    <div class=\"col-lg-7\">\n\n      <!--Grid row-->\n      <div class=\"row pb-3\">\n        <div class=\"col-3 col-md-1\">\n          <i class=\"fa fa-mail-forward fa-lg indigo-text\"></i>\n        </div>\n        <div class=\"col-10\">\n          <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Help people</h5>\n          <p class=\"grey-text text-left\">There are millions of people in the world who are worse of than we are at any one time. Many of these folk have problems that are not their fault or are beyond their ability to prevent or change. Humans are a social animal and the best way for mankind to advance is by helping those who are unable to help themselves. We have a responsibility to care for other people, to help those less fortunate than ourselves. When we have some spare cash, time or goods, it is an opportunity to help out.</p>\n        </div>\n      </div>\n      <!--Grid row-->\n\n      <!--Grid row-->\n      <div class=\"row pb-3\">\n        <div class=\"col-3 col-md-1\">\n          <i class=\"fa fa-mail-forward fa-lg indigo-text\"></i>\n        </div>\n        <div class=\"col-10\">\n          <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Make a difference</h5>\n          <p class=\"grey-text text-left\">Donating to charity is the perfect opportunity to make a difference in the world. By making a difference to someone’s life, you are leaving behind a legacy. You are making a statement that your life was worthwhile because you made a contribution to society.</p>\n        </div>\n      </div>\n      <!--Grid row-->\n\n      <!--Grid row-->\n      <div class=\"row pb-3\">\n        <div class=\"col-3 col-md-1\">\n          <i class=\"fa fa-mail-forward fa-lg indigo-text\"></i>\n        </div>\n        <div class=\"col-10\">\n          <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Feel good</h5>\n          <p class=\"grey-text text-left\">Medical and scientific research has proven beyond doubt that giving to other people makes you feel good. The feeling of satisfaction you get when you help someone else is hard to replicate with any other type of activity or endeavor. People who give feel happier, are less anxious and suffer less depression than those who don’t. Better health is enjoyed by those who donate their time, expertise or money to others who are in need. Charitable people tend to be able to cope with their own problems more easily than those who don’t donate. Giving to others improves your self-esteem, self confidence and self worth. This advantage flows into all areas of your life so you will find that you are more confident at work and in social situations.\n            By WORKING FOR HUMANITY\n          </p>\n        </div>\n      </div>\n      <!--Grid row-->\n\n    </div>\n    <!--Grid column-->\n\n  </div>\n  <!--Grid row-->\n\n</section>\n<!--Section: Features v.3-->\n\n\n\n<!--Section: Team v.1-->\n<section class=\"col-lg-12 container-fluid full\">\n\n  <!--Section heading-->\n  <h2 class=\"h3 text-center py-5\">BUILT  BY</h2>\n  <!--Section description-->\n  <div class=\"row text-center \">\n\n    <!-- Grid column -->\n    <div class=\"col-lg-3 text-center \">\n\n    </div>\n    <div class=\"col-lg-2 text-center \">\n\n      <div class=\"avatar mx-auto my-1\" style=\"width: 150px;\">\n        <img src=\"assets/images/Duy1.jpg\" class=\"rounded-circle img-fluid\" alt=\"First sample avatar image\">\n      </div>\n      <h5 class=\"font-weight-bold\">\n        <strong>Duy</strong>\n      </h5>\n\n    </div>\n    <div class=\"col-lg-4 text-center \">\n\n\n    </div>\n    <!-- Grid column -->\n\n    <!-- Grid column -->\n    <div class=\"col-lg-2 text-center \">\n\n      <div class=\"avatar mx-auto my-1\" style=\"width: 150px;\">\n        <img src=\"assets/images/Vy.jpeg\" class=\"rounded-circle img-fluid \"  alt=\"First sample avatar image\">\n      </div>\n      <h5 class=\"font-weight-bold\">\n        <strong>Vy (team leader)</strong>\n      </h5>\n\n    </div>\n  </div>\n\n  <!-- Grid column -->\n  <div class=\"row text-center mb-5 \">\n    <div class=\"col-lg-1 text-center\">\n\n    </div>\n    <!-- Grid column -->\n    <div class=\"col-lg-2 text-center\">\n\n      <div class=\"avatar mx-auto my-1\" style=\"width: 150px;\">\n        <img src=\"assets/images/Dung.jpg\" class=\"rounded-circle img-fluid \"  alt=\"First sample avatar image\">\n      </div>\n      <h5 class=\"font-weight-bold\">\n        <strong>Dung</strong>\n      </h5>\n\n    </div>\n    <div class=\"col-lg-4 text-center\">\n\n    </div>\n    <!-- Grid column -->\n\n    <!-- Grid column -->\n    <div class=\"col-lg-2 text-center\">\n\n      <div class=\"avatar mx-auto my-1\" style=\"width: 150px;\">\n        <img src=\"assets/images/Lan.jpg\" class=\"rounded-circle img-fluid \"  alt=\"First sample avatar image\">\n      </div>\n      <h5 class=\"font-weight-bold\">\n        <strong>Lan</strong>\n      </h5>\n\n    </div>\n    <div class=\"col-lg-2 text-center\">\n\n    </div>\n\n    <!-- Grid column -->\n\n  </div>\n  <!-- Grid row -->\n\n\n</section>\n\n<!--Section: Team v.1-->\n</body>\n\n<footer class=\"col-sm-12 sticky-footer\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <small>Copyright © Reliance Website 2018</small>\n    </div>\n  </div>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Login form -->\n<br>\n<br>\n<br>\n<form (submit)=\"onloginSubmit()\">\n\n  <p class=\"h1 text-center mb-2 jumbotron col-md-5 container-fluid btn-default waves-light\">\n    <i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Login:</p>\n\n  <div class=\" col-md-6 container-fluid  modal-content \">\n    <div class=\"md-form col-md-12 container-fluid \">\n      <i class=\"fa fa-user prefix grey-text\"></i>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\"  mdbInputDirective>\n      <label>Your username</label>\n    </div>\n\n    <div class=\"md-form col-md-12 container-fluid\">\n      <i class=\"fa fa-lock prefix grey-text\"></i>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" mdbInputDirective>\n      <label>Your password</label>\n    </div>\n\n    <div class=\"text-center\">\n      <input type=\"submit\" class=\"btn btn-default waves-light\" mdbWavesEffect value=\"Login\">\n    </div>\n    <!--Footer-->\n    <div class=\"\">\n      <div class=\"options text-center text-md-right mt-1\">\n        <p>Not a member? <a routerLink=\"/register\" >Sign Up</a></p>\n        <p>Forgot <a routerLink=\"/contact\">Password?</a></p>\n      </div>\n    </div>\n  </div>\n</form>\n<!-- Login form -->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage, validateService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onloginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (!_this.validateService.validateLogin(user)) {
                _this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/charity']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<p class=\"h2 text-center mb-4\" style=\"background-color:pink; margin-left: 250px; margin-right: 250px\">Your Profile</p>\n<div *ngIf=\"user\">\n  <h4 class=\"page-header\" style=\"margin-left: 50px\">Your Ether Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{user.name}}</h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n   <li class=\"list-group-item\">Permission : {{user.permission}}</li>\n  </ul>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/public-profile/public-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Public Profile</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><strong>Username : </strong>{{ username }}</li>\n    <li class=\"list-group-item\"><strong>Email : </strong>{{ email }}</li>\n  </ul>\n"

/***/ }),

/***/ "./src/app/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfileComponent = /** @class */ (function () {
    function PublicProfileComponent(authService, activatedRoute) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.authService.getPublicProfile(this.currentUrl.username).subscribe(function (data) {
            _this.username = data.user.username;
            _this.email = data.user.email;
        });
    };
    PublicProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__("./src/app/public-profile/public-profile.component.html"),
            styles: [__webpack_require__("./src/app/public-profile/public-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PublicProfileComponent);
    return PublicProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Register form -->\n<br>\n<br>\n<br>\n<br>\n<form (submit)=\"onRegisterSubmit()\">\n  <p class=\"h1 text-center mb-4\">Sign up</p>\n  <div class=\"md-form col-md-6 container-fluid \">\n    <i class=\"fa fa-chain-broken prefix grey-text\"></i>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\"  class=\"form-control\" mdbInputDirective>\n    <label>Ether Wallet</label>\n  </div>\n  <div class=\"md-form col-md-6 container-fluid \">\n    <i class=\"fa fa-user prefix grey-text\"></i>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" mdbInputDirective>\n    <label>Username</label>\n  </div>\n  <div class=\"md-form col-md-6 container\">\n    <i class=\"fa fa-envelope-square prefix grey-text\"></i>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" mdbInputDirective>\n    <label>Your email</label>\n  </div>\n  <div class=\"md-form col-md-6 container-fluid \">\n    <i class=\"fa fa-lock prefix grey-text\"></i>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" mdbInputDirective>\n    <label>Your password</label>\n  </div>\n  <div class=\" col-md-6 container-fluid\">\n    <div class=\"options text-center text-md-right mt-1\">\n      <p>Already a member? Please <a routerLink=\"/login\" >Log in</a></p>\n    </div>\n  </div>\n  <div class=\"text-center\">\n    <input type=\"submit\" class=\"btn btn-deep-orange waves-light\" value=\"Submit\" mdbWavesEffect>\n  </div>\n</form>\n<!-- Register form -->\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Username already existed', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/searching/searching.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-item\n{\n  margin-left: auto\n}\n\n.visible {\n  margin: 20px;\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: 1.2;\n  color: black;\n  text-align: center;\n  background-color: white !important;\n}\n\n.inner{\n  width: 300px;\n  height: 40px;\n  background-color: #212121;\n  color:white;\n  margin-left: 100px;\n}\n\n.inner1{\n  width: 300px;\n  height: 40px;\n  background-color: #212121;\n  color:white;\n  margin-left: 100px;\n}\n\n#etherwallet {\n  width: 400px;\n  height:30px;\n  margin: 20px;\n  text-align: center;\n}\n\n/* Style the links inside the navigation bar */\n\n"

/***/ }),

/***/ "./src/app/searching/searching.component.html":
/***/ (function(module, exports) {

module.exports = "<head xmlns=\"http://www.w3.org/1999/html\">\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js\"\n          integrity=\"sha256-J2sc79NPV/osLcIpzL3K8uJyAD7T5gaEFKlLDM18oxY=\" crossorigin=\"anonymous\"></script>\n  <title>Dashboard</title>\n</head>\n\n<br>\n<br>\n<br>\n<body class=\"fixed-nav sticky-footer bg-dark\" id=\"page-top\">\n<!-- Navigation-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\n  <a class=\"navbar-brand\" style=\"color:white\" >USER DASHBOARD</a>\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <ul class=\"navbar-nav ml-auto\">\n\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"index.html\">\n          <i class=\"fa fa-fw fa-sign-out\"></i>Home</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<br/>\n<br/>\n<br/>\n\n\n\n\n\n\n<input id=\"etherwallet\" [(ngModel)]=\"etherwallet\"\n       class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n\n<button class=\"inner\" [(ngModel)]=\"etherwallet\" (click)=\"toggle()\" (click)=\"sendValues()\" id=\"bt\">\n  {{buttonName}} </button>\n<div *ngIf=\"show\">\n\n\n  <div class=\"content-wrapper\">\n    <div class=\"container-fluid\">\n\n      <!-- Area Charts -->\n      <br/>\n      <br/>\n\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <!-- Bar Chart -->\n\n\n\n          <!--<div class=\"card\">\n            <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Price table</h3>\n            <div class=\"card-body\">\n              <div  class=\"table-editable\">\n                <table class=\"table table-bordered  table-striped text-center\">\n                  <tr>\n\n                    <th class=\"text-center\">Coins</th>\n                    <th class=\"text-center\">USD</th>\n                    <th class=\"text-center\">AUD</th>\n\n                  </tr>\n                  <tr *ngFor=\"let crypto of objectKeys(cryptos)\">\n\n                    <td class=\"text-center\">{{ crypto }}</td>\n                    <td class=\"text-center\">{{ cryptos[crypto].USD | currency: 'USD':'symbol-narrow'}}</td>\n                    <td class=\"text-center\">{{cryptos[crypto].AUD | currency: 'AUD':'symbol-narrow'}}</td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n          </div>-->\n\n          <div class=\"card mb-3\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-table\"></i>&nbsp;Account Table</div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                  <thead>\n                  <tr>\n                    <th>Address</th>\n                    <th>Balance</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <td><p style=\"color:red\">{{resultinfo[0].account}}</p></td>\n                    <td><p style=\"color:red\">{{resultinfo[0].balance*0.000000000000000001}}&nbsp;&nbsp;Ether</p></td>\n                  </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <br/>\n          <br/>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br/>\n<br/>\n<button class=\"inner1\" (click)=\"toggle1()\" (click)=\"sendValues()\"  id=\"bt1\">\n  {{buttonName1}} </button>\n<div *ngIf=\"show1\">\n  <br/>\n  <br/>\n\n\n  <div class=\"visible\" >\n    <h3><strong> Table Transaction </strong></h3>\n    <table class=\"table table-responsive table-hover\">\n      <thead class=\"mdb-color darken-3\">\n      <tr class=\"text-white\">\n        <td align=\"center\">BlockNumber</td>\n        <td align=\"center\">Date</td>\n        <td align=\"center\">From</td>\n        <td align=\"center\">To</td>\n        <td align=\"center\">Value</td>\n        <td align=\"center\">Fee</td>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let posts of traninfo\">\n        <td align=\"center\">{{posts.blockNumber}}</td>\n        <td align=\"center\">{{posts.timeStamp*1000 | date:'mediumDate'}} </td>\n        <td align=\"center\">{{posts.from}}</td>\n        <td align=\"center\">{{posts.to}}</td>\n        <td align=\"center\">{{posts.value*0.000000000000000001}}</td>\n        <td align=\"center\">{{posts.gasPrice*posts.gasUsed*0.000000000000000001}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n  </div>\n\n\n  <br>\n  <br>\n\n  <!-- Internal Trans\n\n  <div class=\"visible\" >\n\n    <table class=\"table table-responsive table-hover\">\n      <thead class=\"mdb-color darken-3\">\n      <tr class=\"text-white\">\n        <td align=\"center\">BlockNumber</td>\n        <td align=\"center\">Date</td>\n        <td align=\"center\">From</td>\n        <td align=\"center\">To</td>\n        <td align=\"center\">Value</td>\n        <td align=\"center\">Fee</td>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let posts of intrans\">\n        <td align=\"center\">{{posts.blockNumber}}</td>\n        <td align=\"center\">{{posts.timeStamp*1000 | date:'mediumDate'}} </td>\n        <td align=\"center\">{{posts.from}}</td>\n        <td align=\"center\">{{posts.to}}</td>\n        <td align=\"center\">{{posts.value*0.000000000000000001}}</td>\n        <td align=\"center\">{{posts.gasPrice*posts.gasUsed*0.000000000000000001}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n  </div> -->\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n</body>\n\n<!-- Bootstrap core JavaScript-->\n<script src=\"vendor/jquery/jquery.min.js\"></script>\n<script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n<!-- Core plugin JavaScript-->\n<script src=\"vendor/jquery-easing/jquery.easing.min.js\"></script>\n<!-- Page level plugin JavaScript-->\n<script src=\"vendor/chart.js/Chart.min.js\"></script>\n<script src=\"vendor/datatables/jquery.dataTables.js\"></script>\n<script src=\"vendor/datatables/dataTables.bootstrap4.js\"></script>\n<!-- Custom scripts for all pages-->\n<script src=\"js/sb-admin.min.js\"></script>\n<!-- Custom scripts for this page-->\n<script src=\"js/sb-admin-datatables.min.js\"></script>\n<script src=\"js/sb-admin-charts.min.js\"></script>\n\n\n\n<!-- /.container-fluid-->\n<!-- /.content-wrapper-->\n\n\n\n\n\n\n<!-- Editable table -->\n\n<!-- Editable table -->\n\n\n<footer class=\"sticky-footer\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <small>Copyright © Reliance Website 2018</small>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/searching/searching.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_internaltrans_service__ = __webpack_require__("./src/app/services/internaltrans.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_getbalance_service__ = __webpack_require__("./src/app/services/getbalance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gettransaction_service__ = __webpack_require__("./src/app/services/gettransaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {DataService} from '../services/data.service';
// import {Router} from '@angular/router';
// import {AppService} from '../services/app.service';
// import {TransactionService} from '../services/transaction.service';

// import {AuthService} from '../services/auth.service';


var SearchingComponent = /** @class */ (function () {
    function SearchingComponent(getbalanceService, gettransactionService, internaltransService) {
        this.getbalanceService = getbalanceService;
        this.gettransactionService = gettransactionService;
        this.internaltransService = internaltransService;
        this.objectKeys = Object.keys;
        this.num = this.number + 1;
        this.chart = [];
        this.show = false;
        this.show1 = false;
    }
    SearchingComponent.prototype.sendValues = function () {
        var _this = this;
        this.getbalanceService.getBalances(this.etherwallet)
            .subscribe(function (temp) {
            _this.resultinfo = temp.result;
            console.log(temp.result);
            console.log(_this.etherwallet);
        });
        this.gettransactionService.getTrans(this.etherwallet)
            .subscribe(function (temp) {
            _this.traninfo = temp.result;
            console.log(temp.result);
        });
        this.internaltransService.getInTrans(this.etherwallet)
            .subscribe(function (temp) {
            _this.intrans = temp.result;
            console.log(temp.result);
        });
    };
    SearchingComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show) {
            this.buttonName = 'YOURS ETHER WALLET INFO';
        }
        else {
            this.buttonName = '';
        }
    };
    SearchingComponent.prototype.toggle1 = function () {
        this.show1 = !this.show1;
        if (this.show1) {
            this.buttonName1 = 'YOURS TRANSACTION INFO';
        }
        else {
            this.buttonName1 = '';
        }
    };
    SearchingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-searching',
            template: __webpack_require__("./src/app/searching/searching.component.html"),
            styles: [__webpack_require__("./src/app/searching/searching.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_getbalance_service__["a" /* GetbalanceService */],
            __WEBPACK_IMPORTED_MODULE_3__services_gettransaction_service__["a" /* GettransactionService */],
            __WEBPACK_IMPORTED_MODULE_1__services_internaltrans_service__["a" /* InternaltransService */]])
    ], SearchingComponent);
    return SearchingComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.authenticateAdmin = function (admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admins/authenticate', admin, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdminService.prototype.storeAdminData = function (token, admin) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(admin));
        this.authToken = token;
        this.admin = admin;
    };
    AdminService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AdminService.prototype.logged = function () {
        return this.admin;
    };
    AdminService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    // Get Account Balance Service
    AppService.prototype.getBalances = function (etherwallet) {
        var urlPrefix = 'https://api-ropsten.etherscan.io/api?module=account&action=balancemulti&address=';
        var urlSuffix = '&tag=latest&apikey=YourApiKeyToken';
        return this.http.get(urlPrefix + etherwallet + urlSuffix);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPublicProfile = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/publicProfile/' + username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getAllUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/allUser', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editPermission = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('users/updatePermission', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSingleUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('Users/singleUser/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPermission = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/permission', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.checkPermission = function () {
        if (this.role === 'charity') {
            return this.role;
        }
    };
    AuthService.prototype.ngOnInit = function () {
        var _this = this;
        this.getPermission().subscribe(function (profile) {
            _this.role = profile.user.permission;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/charity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharityService = /** @class */ (function () {
    function CharityService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    CharityService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken();
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    CharityService.prototype.newCharity = function (charity) {
        this.createAuthenticationHeaders();
        return this.http.post('Charitys/newCharity', charity, this.options)
            .map(function (res) { return res.json(); });
    };
    CharityService.prototype.getAllCharity = function () {
        this.createAuthenticationHeaders();
        return this.http.get('Charitys/allCharity', this.options)
            .map(function (res) { return res.json(); });
    };
    CharityService.prototype.getSingleCharity = function (id) {
        //   this.createAuthenticationHeaders();
        //    return this.http.get('http://localhost:3000/Charitys/singleCharity/' + id , this.options)
        //     .map(res => res.json());
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('Charitys/singleCharity/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CharityService.prototype.editCharity = function (charity) {
        this.createAuthenticationHeaders();
        return this.http.put('Charitys/updateCharity', charity, this.options)
            .map(function (res) { return res.json(); });
    };
    CharityService.prototype.deleteCharity = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('Charitys/deleteCharity/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CharityService.prototype.likeCharity = function (id) {
        var data = { id: id };
        this.createAuthenticationHeaders();
        return this.http.put('Charitys/likeCharity/', data, this.options)
            .map(function (res) { return res.json(); });
    };
    CharityService.prototype.dislikeCharity = function (id) {
        var charityData = { id: id };
        return this.http.put('Charitys/dislikeCharity/', charityData, this.options)
            .map(function (res) { return res.json(); });
    };
    CharityService.prototype.postComment = function (id, comment) {
        this.createAuthenticationHeaders(); // Create headers
        // Create blogData to pass to backend
        var blogData = {
            id: id,
            comment: comment
        };
        return this.http.post('Charitys/comment', blogData, this.options).map(function (res) { return res.json(); });
    };
    CharityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], CharityService);
    return CharityService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.AppUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,BCH,ETC,CET,TRX,LTC,ZEC,XRP&tsyms=USD,AUD';
    }
    DataService.prototype.getPrice = function () {
        return this.http.get(this.AppUrl);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/ethcontract.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthcontractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__("./node_modules/web3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_truffle_contract__ = __webpack_require__("./node_modules/truffle-contract/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_truffle_contract__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var tokenAbi = __webpack_require__("./build/contracts/Payment.json");
var EthcontractService = /** @class */ (function () {
    function EthcontractService() {
        //  MetaMask Service
        if (typeof window.web3 !== 'undefined') {
            this.web3Provider = window.web3.currentProvider;
        }
        else {
            this.web3Provider = new __WEBPACK_IMPORTED_MODULE_1_web3__["providers"].HttpProvider('http://localhost:7545');
        }
        window.web3 = new __WEBPACK_IMPORTED_MODULE_1_web3__(this.web3Provider);
    }
    // Get Account Info Service
    EthcontractService.prototype.getAccountInfo = function () {
        return new Promise(function (resolve, reject) {
            window.web3.eth.getCoinbase(function (err, account) {
                if (err === null) {
                    window.web3.eth.getBalance(account, function (err, balance) {
                        if (err === null) {
                            return resolve({ fromAccount: account, balance: (window.web3.fromWei(balance, "ether")).toNumber() });
                        }
                        else {
                            return reject({ fromAccount: "error", balance: 0 });
                        }
                    });
                }
            });
        });
    };
    // Transfer Ether Service
    EthcontractService.prototype.transferEther = function (_transferFrom, _transferTo, _amount) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var paymentContract = __WEBPACK_IMPORTED_MODULE_2_truffle_contract__(tokenAbi);
            paymentContract.setProvider(that.web3Provider);
            paymentContract.deployed().then(function (instance) {
                return instance.transferFund(_transferTo, {
                    from: _transferFrom,
                    value: window.web3.toWei(_amount, "ether")
                });
            }).then(function (status) {
                if (status) {
                    return resolve({ status: true });
                }
            }).catch(function (error) {
                console.log(error);
                return reject("Error in transferEther service call");
            });
        });
    };
    EthcontractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EthcontractService);
    return EthcontractService;
}());



/***/ }),

/***/ "./src/app/services/getbalance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetbalanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetbalanceService = /** @class */ (function () {
    function GetbalanceService(http) {
        this.http = http;
    }
    // Get Account Balance Serching Function
    GetbalanceService.prototype.getBalances = function (etherwallet) {
        var urlPrefix = 'https://api-ropsten.etherscan.io/api?module=account&action=balancemulti&address=';
        var urlSuffix = '&tag=latest&apikey=YourApiKeyToken';
        return this.http.get(urlPrefix + etherwallet + urlSuffix);
    };
    GetbalanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GetbalanceService);
    return GetbalanceService;
}());



/***/ }),

/***/ "./src/app/services/gettransaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GettransactionService = /** @class */ (function () {
    function GettransactionService(http) {
        this.http = http;
    }
    // Get Transaction Searching Function
    GettransactionService.prototype.getTrans = function (etherwallet) {
        var urlPrefix = 'https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=';
        var urlSuffix = '&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken';
        return this.http.get(urlPrefix + etherwallet + urlSuffix);
    };
    GettransactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GettransactionService);
    return GettransactionService;
}());



/***/ }),

/***/ "./src/app/services/internaltrans.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternaltransService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InternaltransService = /** @class */ (function () {
    function InternaltransService(http) {
        this.http = http;
    }
    InternaltransService.prototype.getInTrans = function (etherwallet) {
        var urlPrefix = 'https://api-ropsten.etherscan.io/api?module=account&action=txlistinternal&address=';
        var urlSuffix = '&startblock=0&endblock=2702578&sort=asc&apikey=YourApiKeyToken';
        return this.http.get(urlPrefix + etherwallet + urlSuffix);
    };
    InternaltransService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], InternaltransService);
    return InternaltransService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(_http) {
        this._http = _http;
    }
    MessageService.prototype.sendMessage = function (body) {
        return this._http.post('messages', body);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/transaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionService = /** @class */ (function () {
    function TransactionService(http) {
        this.http = http;
    }
    // Get Transaction Service
    TransactionService.prototype.getTrans = function (etherwallet) {
        var urlPrefix = 'https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=';
        var urlSuffix = '&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken';
        return this.http.get(urlPrefix + etherwallet + urlSuffix);
    };
    TransactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePermission = function (user) {
        if (user.permission === 'charity') {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/userguide/userguide.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userguide/userguide.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<section>\n\n  <!--Section heading-->\n  <h1 class=\"py-5 font-weight-bold text-center\">How to make a donation with us</h1>\n  <!--Section description-->\n  <p class=\"px-5 mb-5 pb-3 lead black-text text-center\">There are several basic steps</p>\n</section>\n<div class=\"container\">\n  <div class=\"row align-items-start\">\n    <div class=\"col\">\n      <img src=\"assets/images/111.png\" alt=\"\" class=\"img-fluid z-depth-2 rounded img-thumbnail\">\n    </div>\n    <div class=\"col-2 col-md-1\">\n      <i class=\"fa fa-mail-forward fa-lg indigo-text\"></i>\n    </div>\n    <div class=\"col\">\n      <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Step 1</h5>\n      <a  target=\"_blank\" style=\"color:grey\">Sign up a metamask account to contain your wallets <a href=\"https://metamask.io/\">here</a> </a>\n    </div>\n  </div>\n  <div class=\"row align-items-start\">\n    <div class=\"col\">\n      <img src=\"assets/images/112.png\" alt=\"\" class=\"img-fluid z-depth-2 rounded img-thumbnail\">\n    </div>\n    <div class=\"col-2 col-md-1\">\n      <i class=\"fa fa-mail-forward fa-lg indigo-text\"></i>\n    </div>\n    <div class=\"col\">\n      <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Step 2</h5>\n      <p class=\"grey-text text-left\">Add metamask to your browser</p>\n    </div>\n  </div>\n  <div class=\"row align-items-start\">\n    <div class=\"col\">\n      <img src=\"assets/images/113.png\" alt=\"\" class=\"img-fluid z-depth-2 rounded img-thumbnail\">\n    </div>\n    <div class=\"col-2 col-md-1\">\n      <i class=\"fa fa-mail-forward fa-lg indigo-text\"></i>\n    </div>\n    <div class=\"col\">\n      <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Step 3</h5>\n      <p class=\"grey-text text-left\">Create account wallet with metamask</p>\n    </div>\n  </div>\n  <div class=\"row align-items-start\">\n    <div class=\"col\">\n      <img src=\"assets/images/114.png\" alt=\"\" class=\"img-fluid z-depth-2 rounded img-thumbnail\">\n    </div>\n    <div class=\"col-2 col-md-1\">\n      <i class=\"fa fa-mail-forward fa-lg indigo-text\"></i>\n    </div>\n    <div class=\"col\">\n      <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Step 4 </h5>\n      <p class=\"grey-text text-left\">Buy ETH from Coinbase and transfer to your metamask account</p>\n    </div>\n  </div>\n  <div class=\"row align-items-start\">\n    <div class=\"col\">\n      <img src=\"assets/images/115.png\" alt=\"\" class=\"img-fluid z-depth-2 rounded img-thumbnail\">\n    </div>\n    <div class=\"col-2 col-md-1\">\n      <i class=\"fa fa-mail-forward fa-lg indigo-text\"></i>\n    </div>\n    <div class=\"col\">\n      <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Step 5 </h5>\n      <p class=\"grey-text text-left\">Donate your ETH to charity account with our transfer system</p>\n\n    </div>\n  </div>\n  <div class=\"row align-items-start\">\n    <div class=\"col\">\n      <img src=\"assets/images/116.png\" alt=\"\" class=\"img-fluid z-depth-2 rounded img-thumbnail\">\n    </div>\n    <div class=\"col-2 col-md-1\">\n      <i class=\"fa fa-mail-forward fa-lg indigo-text\"></i>\n    </div>\n    <div class=\"col\">\n      <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">WELL DONE! </h5>\n      <p class=\"grey-text text-left\">Check your transaction status on <a href=\"https://ropsten.etherscan.io//\">Etherscan</a>  </p>\n\n    </div>\n  </div>\n</div>\n\n<!--Section: Features v.3-->\n\n\n<br/>\n<br/>\n<!--Section: Team v.1-->\n<section class=\"team-section pb-5\">\n\n\n\n\n  <!--Section description-->\n  <h3 class=\"black-text pb-15 text-center \">Need to contact our team </h3>\n  <p align=\"center\">\n    <button type=\"button\" class=\"btn btn-elegant waves-light\" mdbWavesEffect routerLink=\"/contact\">Contact Us</button>\n  </p>\n\n  <!--Section heading-->\n\n  <h2 class=\"h2 text-center py-5\">Our amazing team</h2>\n  <!-- Grid row -->\n  <div class=\"row text-center\">\n\n    <!-- Grid column -->\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"card card-body\">\n        <div class=\"avatar mx-auto my-3\">\n          <img src=\"assets/images/Duy1.jpg\" class=\"rounded-circle img-fluid img-thumbnail\" alt=\"First sample avatar image\">\n        </div>\n        <h5 class=\"font-weight-bold\">\n          <strong>Duy</strong>\n        </h5>\n        <p class=\"grey-text\">Member1</p>\n\n\n      </div>\n    </div>\n    <!-- Grid column -->\n\n    <!-- Grid column -->\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"card card-body\">\n        <div class=\"avatar mx-auto my-3\">\n          <img src=\"assets/images/Vy.jpeg\" class=\"rounded-circle img-fluid img-thumbnail\" alt=\"First sample avatar image\">\n        </div>\n        <h5 class=\"font-weight-bold\">\n          <strong>Vy</strong>\n        </h5>\n        <p class=\"grey-text\">Member2</p>\n\n\n      </div>\n    </div>\n    <!-- Grid column -->\n\n    <!-- Grid column -->\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"card card-body\">\n        <div class=\"avatar mx-auto my-3\">\n          <img src=\"assets/images/Dung.jpg\" class=\"rounded-circle img-fluid img-thumbnail\" alt=\"First sample avatar image\">\n        </div>\n        <h5 class=\"font-weight-bold\">\n          <strong>Dung</strong>\n        </h5>\n        <p class=\"grey-text\">Member3</p>\n\n      </div>\n    </div>\n    <!-- Grid column -->\n\n    <!-- Grid column -->\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"card card-body\">\n        <div class=\"avatar mx-auto my-3\">\n          <img src=\"assets/images/Lan.jpg\" class=\"rounded-circle img-fluid img-thumbnail\" alt=\"First sample avatar image\">\n        </div>\n        <h5 class=\"font-weight-bold\">\n          <strong>Lan</strong>\n        </h5>\n\n        <p class=\"grey-text\">Member 4</p>\n\n\n      </div>\n    </div>\n\n  </div>\n  <!-- Grid row -->\n\n</section>\n\n<footer class=\"sticky-footer\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <small>Copyright © Reliance Website 2018</small>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/userguide/userguide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserguideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserguideComponent = /** @class */ (function () {
    function UserguideComponent() {
    }
    UserguideComponent.prototype.ngOnInit = function () {
    };
    UserguideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userguide',
            template: __webpack_require__("./src/app/userguide/userguide.component.html"),
            styles: [__webpack_require__("./src/app/userguide/userguide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserguideComponent);
    return UserguideComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map