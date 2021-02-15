import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function MovieAlbum() {

    

    return (
        <>
            <div className="movie-album" >
                <div class="card border-light mb-3" style={{ maxWidth: '18rem', marginLeft: '20px', marginRight: '20px', float: 'left', display: 'block' }}>
                    <div class="card-header"> {} </div>
                    <div class="card-body"  style={{content:'overflow'}}>
                        <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg" style={{width: '100%', height: '16rem'}}/>
                    </div>
                </div>
                <div class="card border-light mb-3" style={{ maxWidth: '18rem', marginLeft: '20px', marginRight: '20px', float: 'left', display: 'block' }}>
                    <div class="card-header">Header</div>
                    <div class="card-body "  style={{content:'overflow'}}>
                        <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg" style={{width: '100%', height: '16rem'}}/>
                    </div>
                </div>
                <div class="card border-light mb-3" style={{ maxWidth: '18rem', marginLeft: '20px', marginRight: '20px', float: 'left', display: 'block' }}>
                    <div class="card-header">Header</div>
                    <div class="card-body "  style={{content:'overflow'}}>
                        <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg" style={{width: '100%', height: '16rem'}}/>
                    </div>
                </div>
                <div class="card border-light mb-3" style={{ maxWidth: '18rem', marginLeft: '20px', marginRight: '20px', float: 'left', display: 'block' }}>
                    <div class="card-header">Header</div>
                    <div class="card-body "  style={{content:'overflow'}}>
                        <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg" style={{width: '100%', height: '16rem'}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieAlbum;