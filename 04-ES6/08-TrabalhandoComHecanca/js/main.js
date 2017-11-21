"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pessoas = function () {
	function Pessoas(nome, email, telefone) {
		_classCallCheck(this, Pessoas);

		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
	}

	_createClass(Pessoas, [{
		key: "toString",
		value: function toString() {
			return " Nome:  " + this.nome + "\n\t\t\t\t Email: " + this.email + "\n\t\t\t\t Tel: \t" + this.telefone + "\n\t\t";
		}
	}]);

	return Pessoas;
}();

var Cliente = function (_Pessoas) {
	_inherits(Cliente, _Pessoas);

	function Cliente(id, nome, email, telefone) {
		_classCallCheck(this, Cliente);

		var _this = _possibleConstructorReturn(this, (Cliente.__proto__ || Object.getPrototypeOf(Cliente)).call(this, nome, email, telefone));

		_this.id = id;
		return _this;
	}

	_createClass(Cliente, [{
		key: "toString",
		value: function toString() {
			return "\n\t\t\t\t id: " + this.id + "\n\t\t\t\t" + _get(Cliente.prototype.__proto__ || Object.getPrototypeOf(Cliente.prototype), "toString", this).call(this) + ";\n\t\t";
		}
	}]);

	return Cliente;
}(Pessoas);

var teste = new Cliente(1, "Jose Malcher", "jose@josemalcher.net", "980802222");
console.log(teste.toString());
