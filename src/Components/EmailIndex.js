import EmailRow from './EmailRow';

const EmailIndex = ({data}) => {
    console.log(data.messages)
    return (
        <div>
           <table>
            {data.messages.map(row => <EmailRow email={row}/> )}
           </table>
        </div>
    )
}

export default EmailIndex;
