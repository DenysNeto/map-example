import { Component, ViewChild, ElementRef } from '@angular/core';

@Component ( {
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.css' ],
} )
export class AppComponent {
    title = 'angular-gmap';
    @ViewChild ( 'mapContainer', { static: false } ) gmap: ElementRef;
    
    map: google.maps.Map;
    lat = 40.73061;
    lng = -73.935242;
    
    coordinates = new google.maps.LatLng ( this.lat, this.lng );
    
    mapOptions: google.maps.MapOptions = {
        center: this.coordinates,
        zoom  : 3,
    };
    
    ngAfterViewInit () {
        this.mapInitializer ();
    }
    
    mapInitializer () {
        this.map = new google.maps.Map ( this.gmap.nativeElement, this.mapOptions );
        let temp_marker;
        for ( let i = 0; i < 100; i++ ) {
            temp_marker = new google.maps.Marker ( {
                position: new google.maps.LatLng ( ((Math.random () < 0.5 ? -1 : 1) * Math.random () * 80),
                    (Math.random () < 0.5 ? -1 : 1) * (Math.random () * 180) ),
                map     : this.map,
            } );
            temp_marker.setMap ( this.map );
        }
    }
}
