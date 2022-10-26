import React from 'react';

const Blog = () => {
    return (
        <div>
           <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-3xl font-bold leading-none text-center sm:text-5xl">Questions and Answer</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is cors?</summary>
				<div className="px-4 pb-4">
					<p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br/><br/>

An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json. <br/><br/>

For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Why are you using firebase? What other options do you have to implement authentication?</summary>
				<div className="px-4 pb-4">
					<p>
                        <p className='text-2xl'>Firebase main benefits</p> <br />
                        It’s easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don’t have to send requests to get new data, you only need to subscribe once.
The same applies for file storage. Quick setup authentication via the major providers (Google, Twitter, Facebook, GitHub). Https by default - secure http traffic without setting up certificates. Any static html/javascript content can be hosted.<br /><br />
<p className='text-2xl'> What other options do we have to implement authentication?</p> <br />
It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How does the private route work?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
<br /><br />
The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
				</div>
			</details>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;