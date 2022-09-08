
import { useEffect, useState } from "react";

export default function App() {

	const [posts, definirArtigos] = useState([]);
	const [comentarios, definirComentarios] = useState([]);
	const [perfil, definirPerfil] = useState({});

	useEffect(() => {
		fetch('http://localhost:3000/posts')
			.then((response) => response.json())
			.then((json) => definirArtigos(json));
		 				// Adicione a comunicação 
			// com servidor aqui...

			// Endpoint

			// GET http://localhost:3000/posts

			// GET http://localhost:3000/comments

			// GET http://localhost:3000/profile

			// Response

			//  {
			// 	"posts": [
			// 		{ 
			// 			"id": 1, 
			// 			"title": "json-server", 
			// 			"author": "typicode" 
			// 		}
			// 	],
			// 	"comments": [
			// 		{ 
			// 			"id": 1, 
			// 			"body": "some comment", 
			// 			"postId": 1 
			// 		}
			// 	],
			// 	"profile": { 
			// 		"name": "typicode" 
			// 	}
			// }
	}, []);

	/*
		Renderize as tarefas em tela...
		utilize map()
	*/
	return (
		<ul>
        <h1> Posts </h1>
        {posts.map((post) => (<div key={post.id}>{post.title}</div>
        ))}
      </ul>
		)
}

