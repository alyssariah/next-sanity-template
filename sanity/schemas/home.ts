import hero from './objects/hero';
import callToAction from './objects/callToAction';
import form from './objects/form';
import video from './objects/video';
import imageGallery from './objects/imageGallery';

const home = {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [hero, callToAction, form, video, imageGallery],
    },
  ],
};

export default home;
