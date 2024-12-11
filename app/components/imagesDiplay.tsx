// Define the props type for your component
type MyComponentProps = {
    styles: { [key: string]: string };  // Define the structure of 'items'
    images: string[]
};

const ImagesDisplay: React.FC<MyComponentProps> = ({ styles, images }) => {
    return (
        <section className={`col-md-12 ${styles.cardDiv} `} style={{ padding: ' 0px', marginBottom: '5%' }}>
            {images.map((image) => <div key={image} className={`col-md-4 ${styles.cardImage} `}>
                <img  className={`${styles.manpower} ${styles.fabricFullImg} ${styles.img}`}
                    src={image} />
            </div>)}
        </section>
    )
}

export default ImagesDisplay