interface ButtonProps{
    description:string,
    disabled:boolean,
    style:string
}

function ButtonProps({description,disabled,style}:ButtonProps){
    return(
        <>
        <button className={style} disabled={disabled}>{description}</button> 
        </>
    )
}

export default ButtonProps