import styles from './Food.module.css'

const Food = ()=>{

const availableFood = [
  { name: 'Popcorn', image: 'https://img.freepik.com/free-vector/popcorn-box-design_1284-863.jpg?w=740&t=st=1693484638~exp=1693485238~hmac=17e784a4cf5160bc2d56755f4e001b793cd57b10312b1eb0fe69ccb9d852c09a' },
  { name: 'Samosa', image: 'https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=509&height=340' },
  {name:'Kachori',image:'https://i.ndtvimg.com/i/2017-11/kachori_650x400_51510318031.jpg'},
  {name:'Burger',image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"},
  {name:"Pizza",image:"https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.2.1857139361.1693484617&semt=sph"}
];

  
  
const foodPartners = [
  { name: 'Swiggy', link: 'https://www.swiggy.com/' },
  { name: 'Zomato', link: 'https://www.zomato.com/' },
  {name:'EatSure',link:'https://www.eatsure.com/'},
  {name:'JustMyRoots',link:"https://justmyroots.com/"},
  {name:"Dominos",link:"https://pizzaonline.dominos.co.in/"}
];
  return(<>
    <hr/>
 <h3>Available Food Items</h3>
    <hr/>
 <div className={styles.availablefoodlist}>
  
        {availableFood.map((foodItem, index) => (
          <div key={index} className={styles.fooditem}>
    
              <img src={foodItem.image} alt={foodItem.name} />
              <p>{foodItem.name}</p>
          
          </div>
        ))}
      
    </div>
    
  <hr/>
    <div className={styles.foodservicecontainer}>
      <h2>Food Partners</h2>
      <ul className={styles.foodpartnerslist}>
        {foodPartners.map(partner => (
          <li key={partner.name}>
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              {partner.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  
  </>)
}
export default Food