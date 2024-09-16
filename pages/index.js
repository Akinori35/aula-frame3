import Titulo from "./titulo";

function index(){
    return <div>
        <Titulo titulo="Jump pedrinho jump!!"/>
        <CapsLock name="caio" idade="10"/>
        <CapsLock name="jao" idade="11"/>
        <CapsLock name="pedro" idade="12"/>
        </div>

}
function CapsLock({name, idade}) {
    //console.log(param);
    //return <div>(name)
    return <div>{name} {idade?idade:"sem idade"}</div> 
}
export default index;