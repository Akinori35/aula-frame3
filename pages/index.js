import Titulo from "./titulo";

function index(){
    return <div>
        <Titulo titulo="Jump pedrinho jump!!"/>
        <CapsLock name="caio" idade="10" nota="10" cor="blue"/>
        <CapsLock name="jao" idade="11" nota="10" cor="orange"/>
        <CapsLock name="pedro" idade="12" nota="10" cor="yellow"/>
        </div>

}
function CapsLock({name, idade, cor}) {
    //console.log(param);
    //return <div>(name)
    return <div style={{color:cor}}>{name} {idade?idade:"sem idade"}</div> 
}
export default index;