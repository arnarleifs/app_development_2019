import * as FileSystem from 'expo-file-system';
const imageDirectory = `${FileSystem.documentDirectory}/images`;

const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

export const createFolder = async folderName => {
    return await onException(() => FileSystem.makeDirectoryAsync(`${imageDirectory}/${folderName}`));
}

export const move = async (oldLocation, newLocation) => {
    const result = await onException(() => FileSystem.moveAsync({
        from: oldLocation,
        to: newLocation
    }));
    console.log(result);
    return result;
};

export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}

export const addImage = async imageLocation => {
    const folderSplit = imageLocation.split('/');
    const fileName = folderSplit[folderSplit.length - 1];
    return await onException(() => copyFile(imageLocation, `${imageDirectory}/${fileName}`));
}

export const remove = async name => {
    return await onException(() => FileSystem.deleteAsync(`${imageDirectory}/${name}`, { idempotent: true }));
}

export const loadImage = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
        encoding: FileSystem.EncodingType.Base64
    }));
}

export const getAllItems = async path => {
    const result = await onException(() => FileSystem.readDirectoryAsync(`${imageDirectory}/${path}`));
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
}
