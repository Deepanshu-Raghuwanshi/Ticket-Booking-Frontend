import styles from './Play.module.css'

const Play = ()=>{

const ottShows = [
  { id: 1, title: 'Babli Bouncer', imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/babli_bouncer_release_date_1200x768.jpeg?VersionId=vMdAbr3AG4HeV4pz4oq4Xz_apiYVPgkz&size=690:388' },
  { id: 2, title: ' The Family Man', imageUrl: 'https://etimg.etb2bimg.com/photo/72895084.cms' },
{ id: 3, title: ' Taj Season : 2', imageUrl: 'https://streamingdue.com/wp-content/uploads/2023/03/TAJ-ZEE5.jpg' },
];

const ottPlatforms = [
  { name: 'Netflix', link: 'https://www.netflix.com/' },
  { name: 'Amazon Prime Video', link: 'https://www.amazon.com/Prime-Video/' },
    { name: 'Disney Hotstar', link: 'https://www.hotstar.com/in/home?ref=%2Fin' },
 
];


  
  return(<>
     <div className={styles.ottseasoncontainer}>
      <h2>OTT Shows of the Season</h2>
      <div className={styles.ottshows}>
        {ottShows.map(show => (
          <div key={show.id} className={styles.ottshow}>
               <hr/>
               <h4>{show.title}</h4>
               <hr/>
            <img src={show.imageUrl} alt={show.title} />
            <hr/>
         
          </div>
        ))}
      </div>
      <h2>Our OTT Partners</h2>
      <ul className={styles.ottplatformslist}>
        {ottPlatforms.map(platform => (
          <li key={platform.name}>
            <a href={platform.link} target="_blank" rel="noopener noreferrer">
              {platform.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  
  </>)
}
export default  Play