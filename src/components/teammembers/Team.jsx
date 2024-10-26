import React from 'react'
import './team.css'

const Team = () => {
  return (
    <div className='team-card-container'>
        <div class="card">
		<div class="image-container">
			<img src="3.png"/>
		</div>
		<div class="content">
			<h2 class="profile-name">Jane Doe</h2>
			<p class="description">description...</p>
		</div>
		<div class="social-links">
			<a href="#" class="instagram">
				<img src="logo-instagram.svg"/>
			</a><a href="#" class="instagram">
				<img src="logo-twitter.svg"/>
			</a><a href="#" class="instagram">
				<img src="logo-linkedin.svg"/>
			</a>
		</div>
	</div>
    </div>
  )
}

export default Team;