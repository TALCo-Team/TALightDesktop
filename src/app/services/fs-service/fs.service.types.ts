export class FsNodeList extends Array<FsNodeFile|FsNodeFolder>{};
export class FsNodeFileList extends Array<FsNodeFile>{};
export class FsNodeFolderList extends Array<FsNodeFolder>{};

export interface FsNode {
  name: string;
  path: string;
}

export interface FsNodeFolder extends FsNode {
  folders: FsNodeFolder[];
  files: FsNodeFile[];
}
export interface FsNodeFile extends FsNode {
  content:string|ArrayBuffer
}

const FsNodeEmptyFolder = {name:'',path:'', files:[],folders:[]};
export {FsNodeEmptyFolder}

export interface FsServiceDriver {
  driverName:string;

  mountPoint:string;

  fsRoot:FsNodeFolder;
  fsList:FsNodeList;
  fsListfiles:FsNodeFileList;
  
  mount(path: string): Promise<boolean>;
  
  unmount(path: string): Promise<boolean>;

  ready(): Promise<boolean>;

  createDirectory(fullpath:string): Promise<boolean>;

  writeFile(fullpath:string, content:string|ArrayBuffer): Promise<number>;

  readFile(fullpath:string, binary?: boolean): Promise<string|ArrayBuffer|null>;

  readDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  renameItem(oldpath: string, newpath:string): Promise<boolean>;

  scanDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  delete(fullpath:string): Promise<boolean>;

  exists(fullpath:string): Promise<boolean>;
}

