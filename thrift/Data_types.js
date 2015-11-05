//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var Types_ttypes = require('./Types_types')
var MetaData_ttypes = require('./MetaData_types')


var ttypes = module.exports = {};
TStringValue = module.exports.TStringValue = function(args) {
  this.value = null;
  if (args) {
    if (args.value !== undefined) {
      this.value = args.value;
    }
  }
};
TStringValue.prototype = {};
TStringValue.prototype.read = function(input) {
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
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TStringValue.prototype.write = function(output) {
  output.writeStructBegin('TStringValue');
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 1);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TColumnValue = module.exports.TColumnValue = function(args) {
  this.boolVal = null;
  this.byteVal = null;
  this.i16Val = null;
  this.i32Val = null;
  this.i64Val = null;
  this.doubleVal = null;
  this.stringVal = null;
  if (args) {
    if (args.boolVal !== undefined) {
      this.boolVal = args.boolVal;
    }
    if (args.byteVal !== undefined) {
      this.byteVal = args.byteVal;
    }
    if (args.i16Val !== undefined) {
      this.i16Val = args.i16Val;
    }
    if (args.i32Val !== undefined) {
      this.i32Val = args.i32Val;
    }
    if (args.i64Val !== undefined) {
      this.i64Val = args.i64Val;
    }
    if (args.doubleVal !== undefined) {
      this.doubleVal = args.doubleVal;
    }
    if (args.stringVal !== undefined) {
      this.stringVal = args.stringVal;
    }
  }
};
TColumnValue.prototype = {};
TColumnValue.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.BOOL) {
        this.boolVal = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BYTE) {
        this.byteVal = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I16) {
        this.i16Val = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.i32Val = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.i64Val = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.DOUBLE) {
        this.doubleVal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRUCT) {
        this.stringVal = new ttypes.TStringValue();
        this.stringVal.read(input);
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

TColumnValue.prototype.write = function(output) {
  output.writeStructBegin('TColumnValue');
  if (this.boolVal !== null && this.boolVal !== undefined) {
    output.writeFieldBegin('boolVal', Thrift.Type.BOOL, 1);
    output.writeBool(this.boolVal);
    output.writeFieldEnd();
  }
  if (this.byteVal !== null && this.byteVal !== undefined) {
    output.writeFieldBegin('byteVal', Thrift.Type.BYTE, 2);
    output.writeByte(this.byteVal);
    output.writeFieldEnd();
  }
  if (this.i16Val !== null && this.i16Val !== undefined) {
    output.writeFieldBegin('i16Val', Thrift.Type.I16, 3);
    output.writeI16(this.i16Val);
    output.writeFieldEnd();
  }
  if (this.i32Val !== null && this.i32Val !== undefined) {
    output.writeFieldBegin('i32Val', Thrift.Type.I32, 4);
    output.writeI32(this.i32Val);
    output.writeFieldEnd();
  }
  if (this.i64Val !== null && this.i64Val !== undefined) {
    output.writeFieldBegin('i64Val', Thrift.Type.I64, 5);
    output.writeI64(this.i64Val);
    output.writeFieldEnd();
  }
  if (this.doubleVal !== null && this.doubleVal !== undefined) {
    output.writeFieldBegin('doubleVal', Thrift.Type.DOUBLE, 6);
    output.writeDouble(this.doubleVal);
    output.writeFieldEnd();
  }
  if (this.stringVal !== null && this.stringVal !== undefined) {
    output.writeFieldBegin('stringVal', Thrift.Type.STRUCT, 7);
    this.stringVal.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TRow = module.exports.TRow = function(args) {
  this.colVals = null;
  if (args) {
    if (args.colVals !== undefined) {
      this.colVals = args.colVals;
    }
  }
};
TRow.prototype = {};
TRow.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.colVals = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.TColumnValue();
          elem6.read(input);
          this.colVals.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TRow.prototype.write = function(output) {
  output.writeStructBegin('TRow');
  if (this.colVals !== null && this.colVals !== undefined) {
    output.writeFieldBegin('colVals', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.colVals.length);
    for (var iter7 in this.colVals)
    {
      if (this.colVals.hasOwnProperty(iter7))
      {
        iter7 = this.colVals[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TTableSchema = module.exports.TTableSchema = function(args) {
  this.columns = null;
  if (args) {
    if (args.columns !== undefined) {
      this.columns = args.columns;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field columns is unset!');
    }
  }
};
TTableSchema.prototype = {};
TTableSchema.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.columns = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new MetaData_ttypes.TColumnDesc();
          elem14.read(input);
          this.columns.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TTableSchema.prototype.write = function(output) {
  output.writeStructBegin('TTableSchema');
  if (this.columns !== null && this.columns !== undefined) {
    output.writeFieldBegin('columns', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.columns.length);
    for (var iter15 in this.columns)
    {
      if (this.columns.hasOwnProperty(iter15))
      {
        iter15 = this.columns[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TRowSet = module.exports.TRowSet = function(args) {
  this.startRowOffset = null;
  this.rows = null;
  this.schema = null;
  if (args) {
    if (args.startRowOffset !== undefined) {
      this.startRowOffset = args.startRowOffset;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field startRowOffset is unset!');
    }
    if (args.rows !== undefined) {
      this.rows = args.rows;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field rows is unset!');
    }
    if (args.schema !== undefined) {
      this.schema = args.schema;
    }
  }
};
TRowSet.prototype = {};
TRowSet.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.startRowOffset = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.rows = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ttypes.TRow();
          elem22.read(input);
          this.rows.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.schema = new ttypes.TTableSchema();
        this.schema.read(input);
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

TRowSet.prototype.write = function(output) {
  output.writeStructBegin('TRowSet');
  if (this.startRowOffset !== null && this.startRowOffset !== undefined) {
    output.writeFieldBegin('startRowOffset', Thrift.Type.I64, 1);
    output.writeI64(this.startRowOffset);
    output.writeFieldEnd();
  }
  if (this.rows !== null && this.rows !== undefined) {
    output.writeFieldBegin('rows', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.rows.length);
    for (var iter23 in this.rows)
    {
      if (this.rows.hasOwnProperty(iter23))
      {
        iter23 = this.rows[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.schema !== null && this.schema !== undefined) {
    output.writeFieldBegin('schema', Thrift.Type.STRUCT, 3);
    this.schema.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

