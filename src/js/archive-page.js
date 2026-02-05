/* Extracted from index-playground.html inline archive generator during Vite migration */
// Script to generate all 49 image slides dynamically
    document.addEventListener('DOMContentLoaded', function() {
        const mainSliderViewport = document.querySelector('.TravellersArchive-slider-viewport');
        const syncSliderViewport = document.querySelector('.TravellersArchive-sync-slider-viewport');
        
        // Clear existing content
        if (mainSliderViewport) mainSliderViewport.innerHTML = '';
        if (syncSliderViewport) syncSliderViewport.innerHTML = '';
        
        // Alignment and scale patterns
        const alignments = ['align-center', 'align-left', 'align-right'];
        const scales = ['has-scale-large', 'has-scale-small', 'has-scale-medium'];
        
        // Generate slides based on available images (prevents broken thumbnails)
        const imageIds = [1, 6, 9, 10, 13, 16, 17, 19, 20, 21, 23, 26, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];

        for (const i of imageIds) {
            const alignment = alignments[(i - 1) % 3];
            const scale = scales[(i - 1) % 3];
            const decade = i <= 10 ? '1930s' : i <= 20 ? '1940s' : i <= 30 ? '1950s' : i <= 40 ? '1960s' : '1970s';
            const paddedNumber = String(i).padStart(3, '0');
            
            // Main slider slide
            if (mainSliderViewport) {
                const mainSlide = document.createElement('div');
                mainSlide.className = 'TravellersArchive-slide';
                mainSlide.innerHTML = `
                <div class="slide-effects ${alignment} ${scale}">                                            
                    <div class="slide-inner-height" data-centerLine="VIEW">
                        <div class="slide-moving">
                            <div class="trigger-item change-header" data-centerLine="OPEN" data-projectbgcolor="#1a1a1a">
                                <div class="img-mask">
                                    <a class="slide-link" data-type="page-transition" href="#"></a>
                                    <div class="section-image trigger-item-link">
                                        <img src="src/images/traveller/image (${i}).png" class="item-image grid__item-img" alt="Traveler Archive Image ${paddedNumber}" loading="lazy" decoding="async">
                                    </div>                                                
                                    <img src="src/images/traveller/image (${i}).png" class="grid__item-img grid__item-img--large" alt="Traveler Archive Image ${paddedNumber}" loading="lazy" decoding="async">
                                </div>
                            </div>                                                         
                        </div>                                                            
                    </div>
                    <div class="slide-caption">
                        <div class="slide-date"><span>${decade}</span></div>
                        <div class="slide-title"><span>Archive Document #${paddedNumber}</span></div>
                        <div class="slide-cat"><span>Historical</span></div>
                    </div>
                    <div class="slide-thumb speed-50">
                        <img src="src/images/traveller/image (${i}).png" alt="Thumbnail" loading="lazy" decoding="async">
                    </div>
                </div>
                `;
                mainSliderViewport.appendChild(mainSlide);
            }
            
            // Sync slider slide
            if (syncSliderViewport) {
                const syncSlide = document.createElement('div');
                syncSlide.className = 'TravellersArchive-sync-slide';
                syncSlide.innerHTML = `
                <div class="trigger-item" data-centerLine="OPEN" data-projectbgcolor="#1a1a1a" data-projectcolor="#ffffff">
                    <div class="hover-reveal ${i % 3 === 1 ? 'landscape1' : ''}">
                        <div class="hover-reveal__inner">
                            <div class="hover-reveal__img">
                                <img src="src/images/traveller/image (${i}).png" class="item-image grid__item-img" alt="Traveler Archive Image ${paddedNumber}" loading="lazy" decoding="async">                                             
                                <img class="grid__item-img grid__item-img--large" src="src/images/traveller/image (${i}).png" alt="Traveler Archive Image ${paddedNumber}"  loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>
                    <a class="slide-link" data-type="page-transition" href="#"></a>
                    <div class="slide-title trigger-item-link modify-color"><span>Archive #${paddedNumber}</span></div>
                </div>
                `;
                syncSliderViewport.appendChild(syncSlide);
            }
        }
        
        // Initialize the slider after adding all images
        if (typeof window.initTravellersArchiveSlider === 'function') {
            window.initTravellersArchiveSlider();
        }
    });
