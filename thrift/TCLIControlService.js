//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var Types_ttypes = require('./Types_types')
var Data_ttypes = require('./Data_types')
var MetaData_ttypes = require('./MetaData_types')


var ttypes = require('./CliService_types');
//HELPER FUNCTIONS AND STRUCTURES

TCLIControlService_GracefulShutdownReq_args = function(args) {
};
TCLIControlService_GracefulShutdownReq_args.prototype = {};
TCLIControlService_GracefulShutdownReq_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCLIControlService_GracefulShutdownReq_args.prototype.write = function(output) {
  output.writeStructBegin('TCLIControlService_GracefulShutdownReq_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TCLIControlService_GracefulShutdownReq_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
TCLIControlService_GracefulShutdownReq_result.prototype = {};
TCLIControlService_GracefulShutdownReq_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
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

TCLIControlService_GracefulShutdownReq_result.prototype.write = function(output) {
  output.writeStructBegin('TCLIControlService_GracefulShutdownReq_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TCLIControlService_GetShutdownStatus_args = function(args) {
};
TCLIControlService_GetShutdownStatus_args.prototype = {};
TCLIControlService_GetShutdownStatus_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCLIControlService_GetShutdownStatus_args.prototype.write = function(output) {
  output.writeStructBegin('TCLIControlService_GetShutdownStatus_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TCLIControlService_GetShutdownStatus_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
TCLIControlService_GetShutdownStatus_result.prototype = {};
TCLIControlService_GetShutdownStatus_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.TShutdownStatus();
        this.success.read(input);
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

TCLIControlService_GetShutdownStatus_result.prototype.write = function(output) {
  output.writeStructBegin('TCLIControlService_GetShutdownStatus_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TCLIControlService_ShutdownNow_args = function(args) {
};
TCLIControlService_ShutdownNow_args.prototype = {};
TCLIControlService_ShutdownNow_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCLIControlService_ShutdownNow_args.prototype.write = function(output) {
  output.writeStructBegin('TCLIControlService_ShutdownNow_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TCLIControlService_ShutdownNow_result = function(args) {
};
TCLIControlService_ShutdownNow_result.prototype = {};
TCLIControlService_ShutdownNow_result.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCLIControlService_ShutdownNow_result.prototype.write = function(output) {
  output.writeStructBegin('TCLIControlService_ShutdownNow_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TCLIControlServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
TCLIControlServiceClient.prototype = {};
TCLIControlServiceClient.prototype.seqid = function() { return this._seqid; }
TCLIControlServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
TCLIControlServiceClient.prototype.GracefulShutdownReq = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_GracefulShutdownReq();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GracefulShutdownReq();
  }
};

TCLIControlServiceClient.prototype.send_GracefulShutdownReq = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('GracefulShutdownReq', Thrift.MessageType.CALL, this.seqid());
  var args = new TCLIControlService_GracefulShutdownReq_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

TCLIControlServiceClient.prototype.recv_GracefulShutdownReq = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new TCLIControlService_GracefulShutdownReq_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GracefulShutdownReq failed: unknown result');
};
TCLIControlServiceClient.prototype.GetShutdownStatus = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_GetShutdownStatus();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetShutdownStatus();
  }
};

TCLIControlServiceClient.prototype.send_GetShutdownStatus = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('GetShutdownStatus', Thrift.MessageType.CALL, this.seqid());
  var args = new TCLIControlService_GetShutdownStatus_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

TCLIControlServiceClient.prototype.recv_GetShutdownStatus = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new TCLIControlService_GetShutdownStatus_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetShutdownStatus failed: unknown result');
};
TCLIControlServiceClient.prototype.ShutdownNow = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_ShutdownNow();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_ShutdownNow();
  }
};

TCLIControlServiceClient.prototype.send_ShutdownNow = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('ShutdownNow', Thrift.MessageType.CALL, this.seqid());
  var args = new TCLIControlService_ShutdownNow_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

TCLIControlServiceClient.prototype.recv_ShutdownNow = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new TCLIControlService_ShutdownNow_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
TCLIControlServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
TCLIControlServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

TCLIControlServiceProcessor.prototype.process_GracefulShutdownReq = function(seqid, input, output) {
  var args = new TCLIControlService_GracefulShutdownReq_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GracefulShutdownReq.length === 0) {
    Q.fcall(this._handler.GracefulShutdownReq)
      .then(function(result) {
        var result = new TCLIControlService_GracefulShutdownReq_result({success: result});
        output.writeMessageBegin("GracefulShutdownReq", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new TCLIControlService_GracefulShutdownReq_result(err);
        output.writeMessageBegin("GracefulShutdownReq", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.GracefulShutdownReq( function (err, result) {
      var result = new TCLIControlService_GracefulShutdownReq_result((err != null ? err : {success: result}));
      output.writeMessageBegin("GracefulShutdownReq", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

TCLIControlServiceProcessor.prototype.process_GetShutdownStatus = function(seqid, input, output) {
  var args = new TCLIControlService_GetShutdownStatus_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetShutdownStatus.length === 0) {
    Q.fcall(this._handler.GetShutdownStatus)
      .then(function(result) {
        var result = new TCLIControlService_GetShutdownStatus_result({success: result});
        output.writeMessageBegin("GetShutdownStatus", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new TCLIControlService_GetShutdownStatus_result(err);
        output.writeMessageBegin("GetShutdownStatus", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.GetShutdownStatus( function (err, result) {
      var result = new TCLIControlService_GetShutdownStatus_result((err != null ? err : {success: result}));
      output.writeMessageBegin("GetShutdownStatus", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

TCLIControlServiceProcessor.prototype.process_ShutdownNow = function(seqid, input, output) {
  var args = new TCLIControlService_ShutdownNow_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.ShutdownNow.length === 0) {
    Q.fcall(this._handler.ShutdownNow)
      .then(function(result) {
        var result = new TCLIControlService_ShutdownNow_result({success: result});
        output.writeMessageBegin("ShutdownNow", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new TCLIControlService_ShutdownNow_result(err);
        output.writeMessageBegin("ShutdownNow", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.ShutdownNow( function (err, result) {
      var result = new TCLIControlService_ShutdownNow_result((err != null ? err : {success: result}));
      output.writeMessageBegin("ShutdownNow", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

