//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var Types_ttypes = require('./Types_types')


var ttypes = module.exports = {};
TColumnDesc = module.exports.TColumnDesc = function(args) {
  this.columnName = null;
  this.typeDesc = null;
  this.position = null;
  this.comment = null;
  if (args) {
    if (args.columnName !== undefined) {
      this.columnName = args.columnName;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field columnName is unset!');
    }
    if (args.typeDesc !== undefined) {
      this.typeDesc = args.typeDesc;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field typeDesc is unset!');
    }
    if (args.position !== undefined) {
      this.position = args.position;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field position is unset!');
    }
    if (args.comment !== undefined) {
      this.comment = args.comment;
    }
  }
};
TColumnDesc.prototype = {};
TColumnDesc.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.columnName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.typeDesc = new Types_ttypes.TTypeDesc();
        this.typeDesc.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.position = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.comment = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TColumnDesc.prototype.write = function(output) {
  output.writeStructBegin('TColumnDesc');
  if (this.columnName !== null && this.columnName !== undefined) {
    output.writeFieldBegin('columnName', Thrift.Type.STRING, 1);
    output.writeString(this.columnName);
    output.writeFieldEnd();
  }
  if (this.typeDesc !== null && this.typeDesc !== undefined) {
    output.writeFieldBegin('typeDesc', Thrift.Type.STRUCT, 2);
    this.typeDesc.write(output);
    output.writeFieldEnd();
  }
  if (this.position !== null && this.position !== undefined) {
    output.writeFieldBegin('position', Thrift.Type.I32, 3);
    output.writeI32(this.position);
    output.writeFieldEnd();
  }
  if (this.comment !== null && this.comment !== undefined) {
    output.writeFieldBegin('comment', Thrift.Type.STRING, 4);
    output.writeString(this.comment);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

