/*!
 * Module dependencies.
 */

var util = require('util'),
	utils = require('keystone-utils'),
	super_ = require('../field');

/**
 * Array FieldType Constructor
 * @extends Field
 * @api public
 */

function array(list, path, options) {
	this._nativeType = Array;
	this._underscoreMethods = [];
	array.super_.call(this, list, path, options);
}

/*!
 * Inherit from Field
 */

util.inherits(array, super_);


/*!
 * Export class
 */

exports = module.exports = array;
