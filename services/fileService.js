import * as FileSystem from 'expo-file-system';

const baseDirectory = FileSystem.documentDirectory;
const imageDirectory = `${baseDirectory}/images`;

export const createFolder = async folderName => {
    try {
        const result = await FileSystem.makeDirectoryAsync(`${imageDirectory}/${folderName}`);
        return result;
    } catch (err) {
        console.log(err);
    }
};

export const addImage = async imageLocation => {
    const folderSplit = imageLocation.split('/');
    const fileName = folderSplit[folderSplit.length - 1];
    try {
        const result = await FileSystem.copyAsync({
            from: imageLocation,
            to: `${imageDirectory}/${fileName}`
        });
        return result;
    } catch (err) {
        console.log(err);
    }
};

export const remove = async name => {
    try {
        return FileSystem.deleteAsync(`${imageDirectory}/${name}`, { idempotent: true });
    } catch (err) {
        console.log(err);
    }
}

export const loadImage = async fileName => {
    try {
        return await FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
            encoding: FileSystem.EncodingType.Base64
        });
    } catch (err) {
        console.log(err);
    }
}

export const getAllItems = async () => {
    try {
        const result = await FileSystem.readDirectoryAsync(imageDirectory);
        return Promise.all(result.map(async fileName => {
            if (/\.(jpg|png|bmp)/g.test(fileName)) {
                return {
                    name: fileName,
                    type: 'image',
                    file: await loadImage(fileName)
                }
            }
            return {
                name: fileName,
                type: 'folder'
            };
        }));
    } catch (err) {
        console.log(err);
    }
};
