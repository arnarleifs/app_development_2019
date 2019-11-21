import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const getPermission = async permissionTypes => {
    await Promise.all(permissionTypes.map(async type => await Permissions.askAsync(type)));
};

export const selectFromCameraRoll = async () => {
    await getPermission([ Permissions.CAMERA_ROLL ]);
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: .8,
        base64: true,
        aspect: [16, 9]
    });

    if (result.cancelled) { return ''; }
    return result.uri;
};

export const takePhoto = async () => {
    await getPermission([ Permissions.CAMERA, Permissions.CAMERA_ROLL ]);
    const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: .8,
        base64: true,
        aspect: [16, 9]
    });

    if (result.cancelled) { return ''; }
    return result.uri;
};
