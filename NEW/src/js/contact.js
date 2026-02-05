/*--------------------------------------------------
Contact Form Handler
---------------------------------------------------*/

function ContactForm() {
    const contactForm = $('#contact-formular');
    
    if (contactForm.length === 0) return;
    
    $('#contactform').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const action = form.attr('action');
        const submitBtn = $('#submit');
        const messageDiv = $('#message');
        const loader = form.find('.loader');
        
        // Slide up message if visible
        messageDiv.slideUp(750, function() {
            // Disable submit button
            submitBtn.prop('disabled', true);
            
            // Show loader if exists
            if (loader.length) loader.fadeIn('fast');
            
            // Prepare form data
            const formData = {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
                verify: $('#verify').val()
            };
            
            // Submit via AJAX
            $.post(action, formData)
                .done(function(response) {
                    // Set response message
                    messageDiv.html(response);
                    
                    // Show message with animation
                    messageDiv.slideDown('slow');
                    
                    // Handle loader
                    if (loader.length) {
                        loader.fadeOut('slow', function() {
                            $(this).remove();
                        });
                    }
                    
                    // Re-enable submit button
                    submitBtn.prop('disabled', false);
                    
                    // If success, hide the form
                    if (response.indexOf('success') !== -1) {
                        $('#contactform').slideUp('slow');
                    }
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    // Handle AJAX errors
                    const errorMessage = 'An error occurred. Please try again.';
                    messageDiv.html('<div class="error">' + errorMessage + '</div>');
                    messageDiv.slideDown('slow');
                    submitBtn.prop('disabled', false);
                    
                    // Hide loader on error
                    if (loader.length) loader.fadeOut('fast');
                    
                    console.error('Form submission failed:', textStatus, errorThrown);
                });
        });
    });
}

/*--------------------------------------------------
Google Maps Initialization
---------------------------------------------------*/

function ContactMap() {
    const mapCanvas = $('#map_canvas');
    
    if (mapCanvas.length === 0) return false;
    
    // Check if Google Maps API is loaded
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.error('Google Maps API not loaded');
        return false;
    }
    
    try {
        // Map coordinates
        const defaultLatLng = new google.maps.LatLng(43.270441, 6.640888);
        
        // Map settings
        const mapSettings = {
            zoom: 15,
            center: defaultLatLng,
            disableDefaultUI: true,
            mapTypeControl: false,
            scrollwheel: false,
            draggable: true,
            panControl: false,
            scaleControl: false,
            zoomControl: false,
            streetViewControl: false,
            navigationControl: false
        };
        
        // Custom grayscale style
        const grayscaleStyle = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "saturation": 36 },
                    { "color": "#000000" },
                    { "lightness": 40 }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    { "visibility": "on" },
                    { "color": "#000000" },
                    { "lightness": 16 }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 20 }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 17 },
                    { "weight": 1.2 }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 20 }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 21 }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 17 }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 29 },
                    { "weight": 0.2 }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 18 }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 16 }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 19 }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#000000" },
                    { "lightness": 17 }
                ]
            }
        ];
        
        // Map options with custom style
        const mapOptions = {
            styles: grayscaleStyle,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'grayscale']
            }
        };
        
        // Initialize map
        const map = new google.maps.Map(document.getElementById("map_canvas"), {
            ...mapSettings,
            ...mapOptions
        });
        
        // Create and set custom map type
        const customMapType = new google.maps.StyledMapType(grayscaleStyle, { 
            name: "Grayscale" 
        });
        map.mapTypes.set('grayscale', customMapType);
        map.setMapTypeId('grayscale');
        
        // Handle window resize
        google.maps.event.addDomListener(window, "resize", function() {
            const center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
        
        // Info window content
        const infoWindowContent = `
            <div id="content-map-marker" style="text-align:center; padding:10px;">
                <h4 style="color:#000; font-weight:600; margin-bottom:5px;">
                    Hello Friend!
                </h4>
                <p style="color:#999; font-size:14px; margin-bottom:0;">
                    Here we are. Come to drink a coffee!
                </p>
            </div>
        `;
        
        // Create info window
        const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent,
            maxWidth: 250
        });
        
        // Create marker icon
        const markerIcon = {
            url: 'src/images/marker.png',
            size: new google.maps.Size(58, 63),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(29, 63) // Center bottom
        };
        
        // Create marker
        const marker = new google.maps.Marker({
            position: defaultLatLng,
            map: map,
            icon: markerIcon,
            title: "Our Office",
            animation: google.maps.Animation.DROP
        });
        
        // Add click event to marker
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
        
        // Open info window by default
        infoWindow.open(map, marker);
        
    } catch (error) {
        console.error('Error initializing Google Maps:', error);
        return false;
    }
    
    return false;
}

/*--------------------------------------------------
Initialize both functions when document is ready
---------------------------------------------------*/

$(document).ready(function() {
    // Initialize contact form
    ContactForm();
    
    // Initialize map if needed
    if ($('#map_canvas').length > 0) {
        // Load Google Maps API if not already loaded
        if (typeof google === 'undefined') {
            console.warn('Google Maps API needs to be loaded separately');
        } else {
            ContactMap();
        }
    }
});