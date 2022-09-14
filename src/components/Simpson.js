import './Simpson.css';

export default function Simpson(props) {
    console.log(props);
    let {item, pic, info} = props;

    let className = 'card';
    return (
        <div className={className}>
            <h2>{item}</h2>
            <img src={pic}/>
            <p>{info}</p>
        </div>
    )

}