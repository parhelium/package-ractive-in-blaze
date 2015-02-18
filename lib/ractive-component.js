Template.RactiveComponent.rendered = function () {
    var self = this;
    var compName = this.data.name;
    var comp = window[compName];

    if (!comp)
        throw new Error("Can't find component of type " + compName);

    this.comp = comp;

    if (this.firstNode !== this.lastNode)
        throw new Error("Expected to find one element");
    if (!this.firstNode.tagName === "DIV")
        throw new Error("Expected to find one DIV element");

    var container = this.firstNode;

    this.ractive = new comp({
        el: container,
        template: Ract.getTemplate(compName),
        data : {}
    });

    this.autorun(function () {
        var data = Blaze.getData().data || {};

        self.ractive.data = data;
        self.ractive.update();
    });
};

Template.RactiveComponent.destroyed = function () {
    if( !this.ractive )
        throw new Error('Cannot destroy component which is not defined.')

    this.ractive.teardown()
}