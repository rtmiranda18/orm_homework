# ORM: E-Commerce Back End

## Site Picture
![Site](orm.png)

## Technologies Used
- Javascript - adds special effects on pages
- Node.js - an open source server environment that uses JavaScript on the server
- MySQL - fully managed database service to deploy cloud-native applications.
- GitBash - for cloning repository and pushing code to GitHub
- GitHub - holds repository that deploys to GitHub Pages

## Summary
This file contains code that uses Object-Relational Mapping that creates an E-Commerce Back End. It also contains code that was created using Javascript and Node.js. 

## Code Snippet
```javascript
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll( {
      // JOIN with locations, using the Trip through table
      include: [{ model: Product }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
 ```

```javascript
<javascript>

</javascript>
```

## Video


## Author Links 
[LinkedIn](https://www.linkedin.com/in/rosario-miranda-b81170132/)<br />
[GitHub](https://github.com/rtmiranda18)
