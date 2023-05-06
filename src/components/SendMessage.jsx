// Components/SendMessage.js
import React, { useState } from 'react'
import { createMessage } from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

const SendMessage = ({ interviewId }) => {
  const [content, setContent] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const input = {
      sender: "interviewee",
      message: content,
      messageInterviewId: interviewId,
      direction: "outgoing"
    }
    
    try {
      const result = await API.graphql(
        graphqlOperation(createMessage, { input })
      );
      console.log(result)
      setContent('');
    } catch (error) {
      console.error('Error creating message:', error);
    }

  };

  return (
    <form onSubmit={handleSend}>
      <input
        name="body"
        placeholder="body"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="message-input"
      />
    </form>
  )
};

export default SendMessage;

// export default class extends Component {
//   state = {
//     body: "",
//   };
 
//   handleChange(name, ev) {
//     this.setState({ [name]: ev.target.value });
//   }
 
//   async submit(e) {
//     e.preventDefault();
 
//     await this.props.onCreate({ body: this.state.body });
 
//     this.message.value = "";
//   }
 
//   render() {
//     return (
//       <form onSubmit={e => this.submit(e)}>
//         <input
//           ref={m => {
//             this.message = m;
//           }}
//           name="body"
//           placeholder="body"
//           onChange={e => this.handleChange("body", e)}
//           className="message-input"
//         />
//       </form>
//     );
//   }
// }