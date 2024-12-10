interface ServiceCardProps {
    content: string;
    style?: React.CSSProperties;
    styles?: any;
    ref: any;
}


const ServiceCard: React.FC<ServiceCardProps> = ({styles, content, style, ref }) => (
    <div className={`${styles.card} ${styles.greyBoxCard} ${styles.greyBoxCard2}`} style={style} ref={ref}>
        <p style={{ padding: "15%" }}>{content}</p>
        <div className={`${styles.bottom}` } >&nbsp;</div>
    </div>
);

export default ServiceCard;