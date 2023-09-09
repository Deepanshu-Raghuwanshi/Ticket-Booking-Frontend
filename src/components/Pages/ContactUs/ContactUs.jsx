import styles from './ContactUs.module.css'

const ContactUs = ()=>{
  return(<>
 <div className={styles.contactcontainer}>
      <h2>Contact Us</h2>
      <ul className={styles.contactlist}>
        <li><strong>Phone:</strong> +1234567890</li>
        <li><strong>Email:</strong> marvercineplex@movies.com</li>
        <li><strong>Telegram:</strong> <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">@marvercineplex</a></li>
        <li><strong>Instagram:</strong> <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">@marvelcineplex123
        </a></li>
      </ul>
    </div>
  
  </>)
}

export default ContactUs