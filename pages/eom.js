import { Toolbar } from '../components/components';
import styles from '../styles/EOM.module.css'

export const EOM = ({ employee }) => {
    return(
        <div className="page-container">
            <Toolbar />
                <div className={styles.main}>
                    <h1>Employee of the month</h1>

                    <div className={styles.employeeOfTheMonth}>
                        <h3>Laurynas Gudavičius</h3>
                        <h6>Just a random dude. Nothing else.</h6>
                        <img src='https://64.media.tumblr.com/4d1daa14f21dda42c3a08b6e32419029/e1b8046b2d6b6d08-39/s250x400/99e38b5a4913f718e3b4c3c5b4bf1eb1bef6fc1b.png' />
                        <p>He can't be described. It is what it is.</p>
                    </div>
                </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    );

    const employee = await apiResponse.json();

    return {
        props: {
            employee: employee
        }
    }
};

export default EOM