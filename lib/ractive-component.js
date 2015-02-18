Template.RactiveComponent.rendered = function () {
    var compType = this.data.type;
    var comp = window[compType];

    if (!comp)
        throw new Error("Can't find component of type " + compType);

    this.comp = comp;

    if (this.firstNode !== this.lastNode)
        throw new Error("Expected to find one element");
    if (!this.firstNode.tagName === "DIV")
        throw new Error("Expected to find one DIV element");

    var container = this.firstNode;

    this.ractive = new comp({
        el: container,
        template: Ract.getTemplate(compType),
        data : {}
    });
    var self = this;
    this.autorun(function () {
        var props = Blaze.getData().props || {};
        self.ractive.set( '', props );
    });


};

Template.RactiveComponent.destroyed = function () {
    if( !this.ractive )
        throw new Error('Cannot destroyed component which is not defined.')

    this.ractive.teardown()
}