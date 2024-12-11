// Define the props type for your component
type MyComponentProps = {
    styles: { [key: string]: string };  // Define the structure of 'items'
};

const Manpower: React.FC<MyComponentProps> = ({ styles }) => {
    return (
        <section className={`col-md-12 ${styles.cardDiv} `} style={{ padding: ' 0px', marginBottom: '5%' }}>
            <div className={`col-md-4 ${styles.cardImage} `}>
                <img className={`${styles.manpower} ${styles.fabricFullImg} ${styles.img}`} 
                 src="/images/manpower-banner.jpg" />
            </div>
            <div className="col-md-4 cardImage">
                <img className={`${styles.manpower} ${styles.fabricFullImg} ${styles.img}`} 
                 src="/images/manpower2.jpg" />
            </div>
            <div className="col-md-4 cardImage">
                <img className={`${styles.manpower} ${styles.fabricFullImg} ${styles.img}`} 
                 src="/images/imagens-06.png" />
            </div>
        </section>
    )
}

export default Manpower