import multer from 'multer';

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {},
    filename: (req, file, cb) => {},
  }),
};
