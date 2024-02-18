import classes from './star.module.css';
import Star from './Star.tsx';

type StarsCountProps = {
    count: number,
}

function Stars({count = 0}: StarsCountProps) {

    const getStars = () => {
        let content = [];
        for (let i = 0; i < count; i++) {
            content.push(<Star key={i} />);
        }
        return content;
    }

    return (
        <>
            {count<1 || count>5 ?
                <></> :
                <ul className={[classes["card-body-stars"], "u-clearfix"].join(' ')}>
                    {getStars()}
                </ul>
                }
        </>
    )
}

export default Stars
