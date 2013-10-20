var dumpScript = function(script) {
  var out = [];
  for (var i = 0; i < script.chunks.length; i++) {
    var chunk = script.chunks[i];
    var op = new Bitcoin.Opcode(chunk);
    if (typeof chunk == 'number') {
      out.push(op.toString());
    } else {
      out.push(Crypto.util.bytesToHex(chunk));
    }
  }
  return out.join(' ');
};

var __parseScript = function(script) {
  var newScript = new Bitcoin.Script();
  script.split(' ').forEach(function(i) {

    if (Bitcoin.Opcode.map.hasOwnProperty(i)) {
      newScript.writeOp(Bitcoin.Opcode.map[i]);
    } else if (i == parseInt(i, 10)) {
      newScript.writeOp(Bitcoin.Opcode.map["OP_" + i]);
    } else {
      newScript.writeBytes(Crypto.util.hexToBytes(i));
    }
  });
  return newScript;
};

Bitcoin.Script.parseString = function(string) {
  return __parseScript(string);
};

Bitcoin.Transaction.prototype.toJSON = function() {
  var buf = this.serialize();
  var hash = this.getHash();

  var res = {
    hash: Crypto.util.bytesToHex(hash.reverse()),
    ver: this.version,
    vin_sz: this.ins.length,
    vout_sz: this.outs.length,
    lock_time: this.lock_time,
    size: buf.length,
    'in': this.ins.map(function(txin) {
      var hash = Crypto.util.base64ToBytes(txin.outpoint.hash);
      var n = txin.outpoint.index;
      var prev_out = { hash: Crypto.util.bytesToHex(hash.reverse()), n: n };
      var ss = dumpScript(txin.script);

      return { prev_out: prev_out, scriptSig: ss };
    }),
    out: this.outs.map(function(txout) {
      var bytes = txout.value.slice(0);
      var fval = parseFloat(Bitcoin.Util.formatValue(bytes.reverse()));
      var value = fval.toFixed(8);
      var spk = dumpScript(txout.script);

      return { value: value, scriptPubKey: spk };
    })
  };

  return res;
};

Bitcoin.Transaction.prototype.hex = function() {
  return Crypto.util.bytesToHex(this.serialize());
};

Bitcoin.Transaction.prototype.addInputs = function(arr) {
  arr.forEach(function(i) { this.addInput(i) }.bind(this));
};

Bitcoin.TransactionIn.fromJSON = function(input, reverseHash, scriptHex) {
  var hash = input.tx_hash;
  var index = input.tx_output_n;
  var script;

  if (scriptHex) {
    script = new Bitcoin.Script(Crypto.util.hexToBytes(input.script));
  } else {
    script = Bitcoin.Script.parseString(input.script);
  }

  var b64hashBytes = Crypto.util.hexToBytes(hash);
  if (reverseHash) b64hashBytes.reverse();
  var b64hash = Crypto.util.bytesToBase64(b64hashBytes);

  return new Bitcoin.TransactionIn({
    outpoint: { hash: b64hash, index: index },
    script: script,
    sequence: 4294967295
  });
};

Bitcoin.TransactionIn.prototype.simpleSignScript = function(eckey, tx, idx, hashType) {
  if (hashType === undefined) hashType = 1;

  if (!this.connectedScript) this.connectedScript = this.script;
  var hash = tx.hashTransactionForSignature(this.connectedScript, idx, hashType);
  var signature = eckey.sign(hash);
  signature.push(parseInt(hashType, 10));
  var pubKey = eckey.getPub();
  var script = new Bitcoin.Script();
  script.writeBytes(signature);
  script.writeBytes(pubKey);

  this.script = script;
};

Bitcoin.TransactionIn.prototype.multiSignScript = function(signatures, tx, idx, hashType) {
  if (hashType === undefined) hashType = 1;

  if (!this.connectedScript) this.connectedScript = this.script;
  var hash = tx.hashTransactionForSignature(this.connectedScript, idx, hashType);
  var script = new Bitcoin.Script();
  script.writeOp(0);
  signatures.forEach(function(s) { script.writeBytes(s); });
  this.script = script;
};

Bitcoin.Address.fromPubKey = function(pk) {
  var pkBytes = Crypto.util.hexToBytes(pk)
  var k = new Bitcoin.ECKey();
  k.setPub(pkBytes);
  return k.getBitcoinAddress();
};

Bitcoin.Util.amountToBytes = function(amount) {
  var val = new BigInteger('' + amount, 10);
  val = val.toByteArrayUnsigned().reverse();
  while (val.length < 8) val.push(0);
  return val;
};
