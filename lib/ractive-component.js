//var logger = loggerFactory( 'ractive-component' );
var logger = console
Template.RactiveComponent.rendered = function () {
    logger.log( 'rendered : ', this )
    var self = this;
    var compName = this.data.name;
    var comp = window[compName];

    if ( !comp )
        throw new Error( "Can't find component of type " + compName );

    if ( this.firstNode !== this.lastNode )
        throw new Error( "Expected to find one element" );
    if ( !this.firstNode.tagName === "DIV" )
        throw new Error( "Expected to find one DIV element" );

    var container = this.firstNode;


    var createOrUpdate = function ( data ) {
        logger.log( 'createOrUpdate : data : ', data )
        if ( is.empty( data ) || is.null( data ) ) {
            logger.warn( data )
            logger.warn( 'data is empty or null : Ractive Component is not created. Waiting for not null data.' )
        } else {
            if ( self.ractive ) {
                var data = Blaze.getData().data || {};
                logger.log( 'autorun : data', Blaze.getData().data )
                self.ractive.data = data;
                self.ractive.update();
            } else {
                this.ractive = new comp( {
                    el: container,
                    template: Ract.getTemplate( compName ),
                    data: data
                } );
            }
        }
    }
    this.autorun( function () {
        createOrUpdate( Blaze.getData().data );
    } );
};

Template.RactiveComponent.destroyed = function () {
    if ( !this.ractive )
        throw new Error( 'Cannot destroy component which is not defined.' )

    this.ractive.teardown()
}