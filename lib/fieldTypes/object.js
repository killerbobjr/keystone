/*!
 * Module dependencies.
 */

var util = require('util'),
	utils = require('keystone-utils'),
	super_ = require('../field');

/**
 * Object FieldType Constructor
 * @extends Field
 * @api public
 */

function object(list, path, options) {
	this._nativeType = Object;
	this._underscoreMethods = [];
	object.super_.call(this, list, path, options);
}

/*!
 * Inherit from Field
 */

util.inherits(object, super_);


/*!
 * Export class
 */

exports = module.exports = object;
