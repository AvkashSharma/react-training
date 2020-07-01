import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID rKCIDak5-MRFarJ5uXlloHY_V8HJIhiFG1h1WbIvgtc'
	}
});
