require('dotenv').config();
require('./config/database');

const Location = require('./models/location')
const Artwork = require('./models/artwork')

// const locationSeedData = [
    async function addLocationsArtworks () {
        await Artwork.deleteMany({});
        await Location.deleteMany({});

        // Artwork data
        const artwork1 = new Artwork({
            title: 'Abstract Painting',
            picture: 'https://images.unsplash.com/photo-1640894822819-0a94bec464bf?q=80&w=3335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Vibrant and expressive abstract painting.',
        })


        const artwork2 = new Artwork({
            title: 'Sculpture of Serenity',
            picture: 'https://plus.unsplash.com/premium_photo-1673514503544-1b8c10dd8019?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'A serene sculpture crafted from marble.',
        })


        const artwork3 = new Artwork({
            title: 'Digital Art Showcase',
            picture: 'https://images.unsplash.com/photo-1664816301159-552a0314bc07?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'A digital artwork showcasing creativity and imagination.',
        })


        const artwork4 = new Artwork({
            title: 'Photography: Urban Exploration',
            picture: 'https://plus.unsplash.com/premium_photo-1667239016237-570f3f89e2f6?q=80&w=2316&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Black and white photograph capturing urban landscapes.',
        })


        const artwork5 = new Artwork({
            title: 'Mixed Media Fusion',
            picture: 'https://images.unsplash.com/photo-1597337739814-4d16764c8eee?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Mixed media artwork combining various materials.',
        })


        const artwork6 = new Artwork({
            title: 'Street Art: Graffiti Expressions',
            picture: 'https://images.unsplash.com/photo-1602738328654-51ab2ae6c4ff?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Expressive street art with vibrant graffiti colors.',
        })


        const artwork7 = new Artwork({
            title: 'Ceramic Sculpture: Nature Inspired',
            picture: 'https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Handcrafted ceramic sculpture inspired by nature.',
        })
  

        const artwork8 = new Artwork({
            title: 'Realism Drawing: Portrait',
            picture: 'https://images.unsplash.com/photo-1604952703578-8ae924053711?q=80&w=2998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Detailed pencil drawing capturing the essence of a portrait.',
        })


        const artwork9 = new Artwork({
            title: 'Art Installation: Interactive Space',
            picture: 'https://images.unsplash.com/photo-1584804738473-a49b7441c464?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Interactive art installation exploring space and perception.',
        })


        const artwork10 = new Artwork({
            title: 'Landscape Painting: Tranquil Scenes',
            picture: 'https://images.unsplash.com/photo-1610274672835-65a79c852f58?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Scenic landscape painting portraying tranquil natural scenes.',
        })

        await artwork1.save();
        await artwork2.save();
        await artwork3.save();
        await artwork4.save();
        await artwork5.save();
        await artwork6.save();
        await artwork7.save();
        await artwork8.save();
        await artwork9.save();
        await artwork10.save();

        // Location data
        const location1 = await Location.create({
            locationID: 'L1',
            placeName: 'Location 1',
            address: 'Shibuya, Tokyo',
            type: 'Gallery',
            // artwork: [artwork1._id, artwork2._id, artwork3._id, artwork4._id], // Array of artwork IDs
            longitude: 139.702770,
            latitude: 35.659311,
          });
          location1.artwork.push(artwork1._id)
          location1.artwork.push(artwork2._id)
          location1.artwork.push(artwork3._id)
          location1.artwork.push(artwork4._id)
          await location1.save();

          const location2 = await Location.create({
            locationID: 'L2',
            placeName: 'Location 2',
            address: 'Shibuya, Tokyo',
            type: 'Park',
            // artwork: [artwork5._id, artwork6._id],
            longitude: 139.703916,
            latitude: 35.658144,
          });
          await location2.save();

          const location3 = await Location.create({
            locationID: 'L3',
            placeName: 'Location 3',
            address: 'Shibuya, Tokyo',
            type: 'Street',
            // artwork: [artwork7._id, artwork8._id],
            longitude: 139.705917,
            latitude: 35.660678,
          });
          await location3.save();

          const location4 = await Location.create({
            locationID: 'L4',
            placeName: 'Location 4',
            address: 'Shibuya, Tokyo',
            type: 'Museum',
            // artwork: [artwork10._id],
            longitude: 139.704834,
            latitude: 35.662509,
          });
          await location4.save();

          console.log(location1, location2, location3, location4);
          console.log(artwork1, artwork2, artwork3, artwork4, artwork5, artwork6, artwork7, artwork8, artwork9, artwork10);
        //   Location.bulkSave();
          process.exit();
    };

    addLocationsArtworks();

