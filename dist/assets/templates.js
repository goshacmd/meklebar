define('meklebar/templates/_nav', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Meklebar");
  }

function program3(depth0,data) {
  
  var stack1, stack2, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "send", options) : helperMissing.call(depth0, "link-to", "send", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  else { data.buffer.push(''); }
  }
function program4(depth0,data) {
  
  
  data.buffer.push("Send");
  }

function program6(depth0,data) {
  
  var stack1, stack2, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "redeem", options) : helperMissing.call(depth0, "link-to", "redeem", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  else { data.buffer.push(''); }
  }
function program7(depth0,data) {
  
  
  data.buffer.push("Redeem");
  }

function program9(depth0,data) {
  
  var stack1, stack2, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "approve", options) : helperMissing.call(depth0, "link-to", "approve", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  else { data.buffer.push(''); }
  }
function program10(depth0,data) {
  
  
  data.buffer.push("Approve");
  }

  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("navbar-brand")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <ul class=\"nav navbar-nav\">\n        ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "send", options) : helperMissing.call(depth0, "link-to", "send", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "redeem", options) : helperMissing.call(depth0, "link-to", "redeem", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "approve", options) : helperMissing.call(depth0, "link-to", "approve", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </ul>\n    </div>\n  </div>\n</nav>\n");
  return buffer;
  
}); });

define('meklebar/templates/application', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "nav", options) : helperMissing.call(depth0, "partial", "nav", options))));
  data.buffer.push("\n\n<div class=\"container\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n\n<div class=\"container\">\n  <footer>\n    <ul class=\"list-inline\">\n      <li>by <a href=\"http://goshakkk.name/\">@goshakkk</a></li>\n      <li>1MJhdUoDyAQAVuTidqmqrk5xeLUN3BEJ7n</li>\n      <li><a href=\"https://github.com/goshakkk/meklebar\">View sources</a></li>\n    </ul>\n  </footer>\n</div>\n");
  return buffer;
  
}); });

define('meklebar/templates/approve', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <div class=\"row\">\n    <div class=\"col-lg-offset-3 col-lg-6\">\n      <h3>Send this code to the person who asked you to sign:</h3>\n\n      <p><pre>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "signature.hex", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</pre></p>\n\n      <p><a href=\"#\" class=\"btn btn-primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reset", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Reset</a></p>\n    </div>\n  </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <div class=\"col-lg-offset-2 col-lg-10\">\n        <div class=\"col-lg-7\">\n          <div class=\"form-control-static\">\n            <p>\n              Enter the redemption request code you have received below.\n              Verify the details of the requested transfer. If it looks good to you,\n              paste your private key and generate a signature.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    ");
  hashContexts = {'label': depth0,'value': depth0,'valid': depth0,'comp': depth0,'rows': depth0,'placeholder': depth0,'input-class': depth0};
  hashTypes = {'label': "STRING",'value': "ID",'valid': "ID",'comp': "STRING",'rows': "INTEGER",'placeholder': "STRING",'input-class': "STRING"};
  options = {hash:{
    'label': ("Code"),
    'value': ("code"),
    'valid': ("codeValid"),
    'comp': ("textarea"),
    'rows': (3),
    'placeholder': ("Code"),
    'input-class': ("form-control")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['validated-input'] || depth0['validated-input']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validated-input", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Details</label>\n      <div class=\"col-lg-10\">\n        <div class=\"col-lg-7\">\n          <p class=\"form-control-static\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "hasDetails", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          </p>\n        </div>\n      </div>\n    </div>\n\n    ");
  hashContexts = {'label': depth0,'value': depth0,'valid': depth0,'placeholder': depth0,'maxlength': depth0,'input-class': depth0};
  hashTypes = {'label': "STRING",'value': "ID",'valid': "ID",'placeholder': "STRING",'maxlength': "INTEGER",'input-class': "STRING"};
  options = {hash:{
    'label': ("Private key"),
    'value': ("signature.signatureOrKey"),
    'valid': ("signature.valid"),
    'placeholder': ("Private key"),
    'maxlength': (51),
    'input-class': ("form-control")
  },inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['validated-input'] || depth0['validated-input']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validated-input", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    <div class=\"form-group\">\n      <div class=\"col-lg-offset-2 col-lg-10\">\n        <div class=\"col-lg-7\">\n          <a href=\"#\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("signature.valid::disabled :btn :btn-primary")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sign", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Approve redemption</a>\n        </div>\n      </div>\n    </div>\n  </form>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.focusedInvalid", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n        <span class=\"has-error\">\n          <span class=\"help-block\">\n            Invalid code.\n          </span>\n        </span>\n      ");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n              Allow redemption of\n              ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.btcValue || depth0.btcValue),stack1 ? stack1.call(depth0, "amount", options) : helperMissing.call(depth0, "btcValue", "amount", options))));
  data.buffer.push(" BTC - ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "fee", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" BTC = <b>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.btcValue || depth0.btcValue),stack1 ? stack1.call(depth0, "amountWithoutFee", options) : helperMissing.call(depth0, "btcValue", "amountWithoutFee", options))));
  data.buffer.push(" BTC</b>\n              to <b>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "address", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</b>\n              (per transaction <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  options = {hash:{
    'href': ("blockchainUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "inputHash", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>).\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n              &mdash;\n            ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      <span class=\"help-block\"><a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "help/private-key", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Why is it needed and where can I find it?</a></span>\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.focusedInvalid", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program12(depth0,data) {
  
  
  data.buffer.push("\n        <span class=\"has-error\">\n          <span class=\"help-block\">\n            Invalid private key.\n          </span>\n        </span>\n      ");
  }

  data.buffer.push("<h2>Approve escrow redemption</h2>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "showSignature", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('meklebar/templates/components/modal-dialog', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"modal-backdrop in\"></div>\n\n<div class=\"modal modal-display\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  <div class=\"modal-dialog\" ");
  hashContexts = {'bubbles': depth0};
  hashTypes = {'bubbles': "BOOLEAN"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, {hash:{
    'bubbles': (false)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"#\" class=\"close\">&times;</a>\n        <h4 class=\"modal-title\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n      </div>\n      <div class=\"modal-body\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
}); });

define('meklebar/templates/components/number-input', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
}); });

define('meklebar/templates/components/validated-input-inner', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
}); });

define('meklebar/templates/components/validated-input', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<label class=\"col-lg-2 control-label\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "label", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</label>\n\n<div class=\"col-lg-10\">\n  <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("inputColClass")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n    ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "compView", {hash:{
    'class': ("input-class")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n\n  ");
  hashContexts = {'condition': depth0,'class': depth0};
  hashTypes = {'condition': "ID",'class': "STRING"};
  options = {hash:{
    'condition': ("valid"),
    'class': ("control-label")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['validation-glyphicon'] || depth0['validation-glyphicon']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validation-glyphicon", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
}); });

define('meklebar/templates/components/validated-number-input-inner', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
}); });

define('meklebar/templates/components/validated-textarea-input-inner', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
}); });

define('meklebar/templates/components/validation-glyphicon', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
}); });

define('meklebar/templates/help/private-key', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n  <p>\n    A <b>private key</b> is a secret number that allows you to spend your coins. Every bitcoin address has a matching private key.\n  </p>\n\n  <div class=\"alert alert-warning\">\n    <b>Note:</b> Meklebar does not store your private key in the browser, nor does it transmit it over the network.\n    Your private key is only used for signing transactions client-side. It never leaves your computer.\n    You may check Meklebar sources to verify this statement.\n  </div>\n\n  <h3>Where to find it?</h3>\n\n  <p>Here is how you can find your private key in the popular wallet apps:</p>\n\n  <h4>Bitcoin QT</h4>\n\n  <ol>\n    <li>Launch Bitcoin QT application</li>\n    <li>Find your address in Receive/Addresses tabs, select one, click \"Copy Address\"</li>\n    <li>Click \"Help\" in menu bar</li>\n    <li>Click \"Debug window\"</li>\n    <li>Select \"Console\" tab</li>\n    <li><i>If your wallet is protected by passphrase</i>, enter <code>walletpassphrase \"your pass phrase\" 600</code></li>\n    <li>Type <code>dumpprivkey \"paste your address here\"</code> and press return</li>\n    <li>It will return your private key, something like <code>KwRt3YD1Kv4LhDSREwRZy4vv4BvVoxgPBL338NoMq1J98R6cJu8z</code></li>\n    <li>Copy it and paste it to Meklebar</li>\n  </ol>\n\n  <h4>Blockchain Wallet</h4>\n\n  <ol>\n    <li>Log into your wallet</li>\n    <li>Select \"Import / Export\" tab</li>\n    <li>If you are prompted for your password, enter it</li>\n    <li>Select \"Export Unencrypted\" in the sidebar</li>\n    <li>In a section that just appeared, find the select prompting for private key format</li>\n    <li>Select \"Bitcoin-Qt Format\" there</li>\n    <li>In a gray field below, locate your address</li>\n    <li>Copy the corresponding private key and paste it to Meklebar</li>\n  </ol>\n\n  <h4>Electrum</h4>\n\n  <ol>\n    <li>Launch Electrum application</li>\n    <li>Select \"Receive\" tab</li>\n    <li>Locate your address</li>\n    <li>Right-click it and choose \"Private key\"</li>\n    <li>Copy the private key and past it to Meklebar</li>\n  </ol>\n");
  }

  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("On the private keys")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['modal-dialog'] || depth0['modal-dialog']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('meklebar/templates/help/public-key', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n  <p>\n    A <b>public key</b> is something that identifies your wallet.<br>\n    An <b>address</b> is a shorter representation of your public key.<br>\n    A record of your public key in an escrow transaction means that you may sign the redeeming transaction and it will be accepted.\n  </p>\n\n  <h3>Where to find address?</h3>\n\n  <p>Most of the clients list your addresses under \"Receive\" tab or similar. Simply go there and copy the needed address.</p>\n\n  <p>\n    Sometimes, though, like in the case when you never transacted from this address, it will not be possible to find a public key\n    for your address. In these cases will appear a red lebel below \"public key/address\" input field.\n  </p>\n\n  <h3>Where to find public key?</h3>\n\n  <p>Here is how you can find your public key in the popular wallet apps:</p>\n\n  <h4>Bitcoin QT</h4>\n\n  <ol>\n    <li>Launch Bitcoin QT application</li>\n    <li>Find your address in Receive/Addresses tabs, select one, click \"Copy Address\"</li>\n    <li>Click \"Help\" in menu bar</li>\n    <li>Click \"Debug window\"</li>\n    <li>Select \"Console\" tab</li>\n    <li>Type <code>validateaddress \"paste your address here\"</code> and press return</li>\n    <li>It will return your a hash of data</li>\n    <li>Locate \"pubkey\" and the corresponding public key, something like <code>03d2777f634a26d267334dab6765afd813e6361822c006bae8cc75bc0dd61eb294</code></li>\n    <li>Copy it and paste it to Meklebar</li>\n  </ol>\n\n  <h4>Blockchain Wallet</h4>\n\n  <ol>\n    <li>Log into your wallet</li>\n    <li>Select \"Receive Money\" tab</li>\n    <li>Locate your address and click on the \"Actions\" button next to it</li>\n    <li>Select \"Show Public Key\" there</li>\n    <li>There will appear a green notification on the right top side of the screen.\n    <li>Copy the public key and paste it to Meklebar</li>\n  </ol>\n\n  <h4>Electrum</h4>\n\n  <ol>\n    <li>Launch Electrum application</li>\n    <li>Find your address in \"Receive\" tab, select one, right-click and \"Copy to clipboard\"</li>\n    <li>Select \"Console\" tab</li>\n    <li>Type <code>validateaddress(\"paste your address here\")</code> (brackets and quotes are important) and press return</li>\n    <li>It will return your a hash of data</li>\n    <li>Locate \"pubkey\" and the corresponding public key, something like <code>03d2777f634a26d267334dab6765afd813e6361822c006bae8cc75bc0dd61eb294</code></li>\n    <li>Copy it and paste it to Meklebar</li>\n  </ol>\n");
  }

  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("On the public keys and addresses")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['modal-dialog'] || depth0['modal-dialog']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('meklebar/templates/help/why-fee', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n  <p>\n    Transaction fees are needed in order to ensure the miners process the transaction.\n    Without a fee the transaction may take a long time to get confirmed or it may not get confirmed at all.\n  </p>\n");
  }

  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("Why the fees")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['modal-dialog'] || depth0['modal-dialog']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('meklebar/templates/index', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2>What is it</h2>\n\n<p>\n  Meklebar is a service which allows you to create bitcoin escrow transactions. The important thing\n  is that you do not have to <b>trust</b> any third party with all of your money.\n</p>\n\n<h2>What is an escrow transaction?</h2>\n\n<p>\n  Escrow transaction is a way to lock up some coins so a third party has to agree in order to spend them.\n</p>\n\n<p>\n  For example, a buyer of some good wants to trade with somebody they do not know or trust. In a case where\n  the transaction goes well, the client does not want to get any third party involved. But if something does\n  go wrong, they would like a third party — probably a professional dispute mediator — to resolve the conflict\n  and decide who gets the money.\n</p>\n\n<h2>How does it work?</h2>\n\n<p>In very simple terms, it works like this:</p>\n\n<ol>\n  <li>A buyer agrees with the merchant on a mediator</li>\n  <li>A buyer asks the merchant and the mediator for their public keys</li>\n  <li>Create an escrow transaction which requires at least 2 people to agree and list own, merchat's, and mediator's public keys</li>\n</ol>\n\n<p>Now the coins are locked up and there are three possible scenarios:</p>\n\n<ol>\n  <li>Buyer and merchant agree (a successful trade, for example)</li>\n  <li>Buyer and mediator agree (a failed trade, mediator sides with a buyer)</li>\n  <li>Merchant and mediator agree (good delivered, mediator sides witg a merchant)</li>\n</ol>\n\n<p>\n  Then the receiving party would go to \"Redeem\" tab and paste the transaction ID and receiving wallet address.\n  They would then send a special code to the mediator. The mediator would visit \"Accept\", paste the code, verify\n  the requested redemption details and, if everything is good, they would enter their private key and generate a\n  signature. They would, then, send the signature to the receiving party. The receiving party would paste their private\n  key and the other party signature and redeem the coins.\n</p>\n");
  
}); });

define('meklebar/templates/redeem', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n  <div class=\"row\">\n    <div class=\"col-lg-offset-3 col-lg-6\">\n      <h3>Redemption completed successfully</h3>\n\n      <h4>Transaction: <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  options = {hash:{
    'href': ("blockchainUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "hash", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></h4>\n\n      <a href=\"#\" class=\"btn btn-primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reset", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">OK</a>\n    </div>\n  </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <div class=\"col-lg-offset-2 col-lg-10\">\n        <div class=\"col-lg-7\">\n          <div class=\"form-control-static\">\n            <p>\n              To redeem an escrow transaction, you need to know its ID, and you need\n              to have your private key, as well as the signature of the mediator or\n              other party. Fill the form below and click \"Redeem\".\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    ");
  hashContexts = {'label': depth0,'value': depth0,'valid': depth0,'placeholder': depth0,'maxlength': depth0,'input-class': depth0};
  hashTypes = {'label': "STRING",'value': "ID",'valid': "ID",'placeholder': "STRING",'maxlength': "INTEGER",'input-class': "STRING"};
  options = {hash:{
    'label': ("Transaction hash"),
    'value': ("inputHash"),
    'valid': ("validTx"),
    'placeholder': ("Transaction hash"),
    'maxlength': (64),
    'input-class': ("form-control")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['validated-input'] || depth0['validated-input']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validated-input", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Amount</label>\n      <div class=\"col-lg-10\">\n        <div class=\"col-lg-7\">\n          <p class=\"form-control-static\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "amount", {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          </p>\n        </div>\n      </div>\n    </div>\n\n    ");
  hashContexts = {'label': depth0,'value': depth0,'valid': depth0,'placeholder': depth0,'maxlength': depth0,'input-class': depth0};
  hashTypes = {'label': "STRING",'value': "ID",'valid': "ID",'placeholder': "STRING",'maxlength': "INTEGER",'input-class': "STRING"};
  options = {hash:{
    'label': ("Redeem to (address)"),
    'value': ("address"),
    'valid': ("validAddress"),
    'placeholder': ("Redeem to address"),
    'maxlength': (34),
    'input-class': ("form-control")
  },inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['validated-input'] || depth0['validated-input']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validated-input", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "moreThanOneSig", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "signatures", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    <div class=\"form-group\">\n      <div class=\"col-lg-offset-2 col-lg-10\">\n        <div class=\"col-lg-7\">\n          <a href=\"#\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("redeemDisabled:disabled :btn :btn-primary")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "redeem", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "sendingTx", {hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          </a>\n\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "error", {hash:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n  </form>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.valid", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.focusedInvalid", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <span class=\"help-block\">\n          Signatures needed: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "input.escrowOut.signaturesNeeded", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" (out of ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "input.escrowOut.signers.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" designated signers)\n        </span>\n      ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n        <span class=\"has-error\">\n          <span class=\"help-block\">\n            Invalid transaction. It either does not exist or is not confirmed.\n          </span>\n        </span>\n      ");
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n              ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.btcValue || depth0.btcValue),stack1 ? stack1.call(depth0, "amount", options) : helperMissing.call(depth0, "btcValue", "amount", options))));
  data.buffer.push(" BTC - ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "fee", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" BTC = <b>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.btcValue || depth0.btcValue),stack1 ? stack1.call(depth0, "amountWithoutFee", options) : helperMissing.call(depth0, "btcValue", "amountWithoutFee", options))));
  data.buffer.push("</b> BTC.\n              <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "help/why-fee", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Why the fees?</a>\n            ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n              &mdash;\n            ");
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.focusedInvalid", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program14(depth0,data) {
  
  
  data.buffer.push("\n        <span class=\"has-error\">\n          <span class=\"help-block\">\n            Invalid address.\n          </span>\n        </span>\n      ");
  }

function program16(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <div class=\"form-group\">\n        <div class=\"col-lg-offset-2 col-lg-10\">\n          <div class=\"col-lg-7\">\n            <div class=\"form-control-static\">\n              <p>Ask others to sign the redemption using this code:</p>\n              <pre>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "requestCode", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</pre>\n              <p>Then fill the fields below with your own private key and the signature(s) of others.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'label': depth0,'value': depth0,'valid': depth0,'placeholder': depth0,'maxlength': depth0,'input-class': depth0};
  hashTypes = {'label': "ID",'value': "ID",'valid': "ID",'placeholder': "ID",'maxlength': "INTEGER",'input-class': "STRING"};
  options = {hash:{
    'label': ("label"),
    'value': ("signatureOrKey"),
    'valid': ("valid"),
    'placeholder': ("placeholder"),
    'maxlength': (160),
    'input-class': ("form-control")
  },inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['validated-input'] || depth0['validated-input']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validated-input", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.focusedInvalid", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program20(depth0,data) {
  
  
  data.buffer.push("\n          <span class=\"has-error\">\n            <span class=\"help-block\">\n              Invalid private key or signature.\n            </span>\n          </span>\n        ");
  }

function program22(depth0,data) {
  
  
  data.buffer.push("Redeeming...");
  }

function program24(depth0,data) {
  
  
  data.buffer.push("Redeem");
  }

function program26(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<b>Transaction error: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "error", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</b>");
  return buffer;
  }

  data.buffer.push("<h2>Redeem</h2>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "pushSuccess", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('meklebar/templates/send', [], function(){ return Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n  <div class=\"row\">\n    <div class=\"col-lg-offset-3 col-lg-6\">\n      <h3>Transaction submitted successfully</h3>\n\n      <h4>Transaction: <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  options = {hash:{
    'href': ("blockchainUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "hash", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></h4>\n\n      <a href=\"#\" class=\"btn btn-primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reset", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">OK</a>\n    </div>\n  </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <div class=\"col-lg-offset-2 col-lg-10\">\n        <div class=\"col-lg-7\">\n          <div class=\"form-control-static\">\n            <p>\n              To create an escrow transaction, you would need your private\n              key, as well as public keys or addresses of the intended reveiver and\n              the mediator.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    ");
  hashContexts = {'label': depth0,'value': depth0,'valid': depth0,'placeholder': depth0,'maxlength': depth0,'input-class': depth0};
  hashTypes = {'label': "STRING",'value': "ID",'valid': "ID",'placeholder': "STRING",'maxlength': "INTEGER",'input-class': "STRING"};
  options = {hash:{
    'label': ("Private key (sender)"),
    'value': ("source.priv"),
    'valid': ("source.addrValid"),
    'placeholder': ("Private key"),
    'maxlength': (51),
    'input-class': ("form-control")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['validated-input'] || depth0['validated-input']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validated-input", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashContexts = {'label': depth0,'value': depth0,'valid': depth0,'comp': depth0,'input-cols': depth0,'step': depth0,'min': depth0,'max': depth0,'input-class': depth0};
  hashTypes = {'label': "STRING",'value': "ID",'valid': "ID",'comp': "STRING",'input-cols': "INTEGER",'step': "STRING",'min': "STRING",'max': "ID",'input-class': "STRING"};
  options = {hash:{
    'label': ("Amount"),
    'value': ("amountBTC"),
    'valid': ("validAmount"),
    'comp': ("number"),
    'input-cols': (2),
    'step': ("0.1"),
    'min': ("0"),
    'max': ("source.balanceBTC"),
    'input-class': ("form-control")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['validated-input'] || depth0['validated-input']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validated-input", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">+ fees</label>\n      <div class=\"col-lg-10\">\n        <div class=\"col-lg-7\">\n          <p class=\"form-control-static\">\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.btcValue || depth0.btcValue),stack1 ? stack1.call(depth0, "fee", options) : helperMissing.call(depth0, "btcValue", "fee", options))));
  data.buffer.push(" BTC sending fee + ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.btcValue || depth0.btcValue),stack1 ? stack1.call(depth0, "fee", options) : helperMissing.call(depth0, "btcValue", "fee", options))));
  data.buffer.push(" BTC redemption fee.\n            <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "help/why-fee", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Why the fees?</a>\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Total</label>\n      <div class=\"col-lg-10\">\n        <div class=\"col-lg-7\">\n          <p class=\"form-control-static\"><b>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.btcValue || depth0.btcValue),stack1 ? stack1.call(depth0, "totalAmount", options) : helperMissing.call(depth0, "btcValue", "totalAmount", options))));
  data.buffer.push(" BTC</b></p>\n\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "enoughMoney", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n\n    ");
  hashContexts = {'label': depth0,'value': depth0,'valid': depth0,'placeholder': depth0,'maxlength': depth0,'input-class': depth0};
  hashTypes = {'label': "STRING",'value': "ID",'valid': "ID",'placeholder': "STRING",'maxlength': "INTEGER",'input-class': "STRING"};
  options = {hash:{
    'label': ("Receiver PK/address"),
    'value': ("receiver.pubKeyOrAddress"),
    'valid': ("receiver.validParty"),
    'placeholder': ("Receiver public key or address"),
    'maxlength': (130),
    'input-class': ("form-control")
  },inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['validated-input'] || depth0['validated-input']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validated-input", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashContexts = {'label': depth0,'value': depth0,'valid': depth0,'placeholder': depth0,'maxlength': depth0,'input-class': depth0};
  hashTypes = {'label': "STRING",'value': "ID",'valid': "ID",'placeholder': "STRING",'maxlength': "INTEGER",'input-class': "STRING"};
  options = {hash:{
    'label': ("Mediator PK/address"),
    'value': ("mediator.pubKeyOrAddress"),
    'valid': ("mediator.validParty"),
    'placeholder': ("Mediator public key or address"),
    'maxlength': (130),
    'input-class': ("form-control")
  },inverse:self.noop,fn:self.program(24, program24, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['validated-input'] || depth0['validated-input']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "validated-input", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    <div class=\"form-group\">\n      <div class=\"col-lg-offset-2 col-lg-10\">\n        <div class=\"col-lg-7\">\n          <a href=\"#\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("sendDisabled:disabled :btn :btn-primary")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendTx", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "sendingTx", {hash:{},inverse:self.program(32, program32, data),fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          </a>\n\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "error", {hash:{},inverse:self.noop,fn:self.program(34, program34, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n      </div>\n    </div>\n  </form>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      <span class=\"help-block\"><a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "help/private-key", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Why is it needed and where can I find it?</a></span>\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.valid", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.focusedInvalid", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <span class=\"help-block\">\n          Source: <b>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "source.address", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</b> (");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.btcValue || depth0.btcValue),stack1 ? stack1.call(depth0, "source.balance", options) : helperMissing.call(depth0, "btcValue", "source.balance", options))));
  data.buffer.push(" BTC)\n        </span>\n      ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n        <span class=\"has-error\">\n          <span class=\"help-block\">\n            Invalid private key.\n          </span>\n        </span>\n      ");
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.focusedInvalid", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <span class=\"has-error\">\n          <span class=\"help-block\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "moreThanMin", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n        </span>\n      ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("Should be at least 0.01 BTC.");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n            <span class=\"has-error\">\n              <span class=\"help-block\">\n                Not enough money.\n              </span>\n            </span>\n          ");
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      <span class=\"help-block\"><a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "help/public-key", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Why is it needed and where can I find it?</a></span>\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.valid", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.focusedInvalid", {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "receiver.pkoaPubKey", {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <span class=\"help-block\">Address: <b>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "receiver.address", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</b></span>\n        ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <span class=\"has-error\">\n          <span class=\"help-block\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "receiver.addrNoPub", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "receiver.noAddrNoPub", {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n        </span>\n      ");
  return buffer;
  }
function program20(depth0,data) {
  
  
  data.buffer.push("\n              Public key for this address could not be found.\n              Please, use public key instead.\n            ");
  }

function program22(depth0,data) {
  
  
  data.buffer.push("Invalid address/public key.");
  }

function program24(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      <span class=\"help-block\"><a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "help/public-key", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Why is it needed and where can I find it?</a></span>\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.valid", {hash:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.focusedInvalid", {hash:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program25(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "mediator.pkoaPubKey", {hash:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <span class=\"help-block\">Address: <b>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mediator.address", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</b></span>\n        ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <span class=\"has-error\">\n          <span class=\"help-block\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "mediator.addrNoPub", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "mediator.noAddrNoPub", {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n        </span>\n      ");
  return buffer;
  }

function program30(depth0,data) {
  
  
  data.buffer.push("Sending transaction...");
  }

function program32(depth0,data) {
  
  
  data.buffer.push("Send transaction");
  }

function program34(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<b>Error sending transaction: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "error", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</b>");
  return buffer;
  }

  data.buffer.push("<h2>Create an escrow transaction</h2>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "pushSuccess", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });