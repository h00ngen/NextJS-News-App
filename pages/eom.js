import { Toolbar } from '../components/components';
import styles from '../styles/EOM.module.css'
import Image from 'next/image'


export const EOM = ({ employee }) => {
    return(
        <div className="page-container">
            <Toolbar />
                <div className={styles.main}>
                    <h1>Employee of the month</h1>

                    <div className={styles.employeeOfTheMonth}>
                        <h3>Laurynas Gudavičius</h3>
                        <h6>Just a random dude. Nothing else.</h6>
                        <Image src="https://cdn.drawception.com/images/avatars/647493-B9E.png" alt="Profile picture" width={250} height={250}/> 

                        <p>He can not be described. It is what it is.</p>
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