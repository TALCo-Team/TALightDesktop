export class FsNodeList extends Array<FsNodeFile|FsNodeFolder>{};

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

export interface FsServiceDriver {
  rootDir:string;
  
  mount(path: string): Promise<boolean>;
  
  unmount(path: string): Promise<boolean>;

  ready(): Promise<boolean>;

  createDirectory(fullpath:string): Promise<boolean>;

  writeFile(fullpath:string, content:string|ArrayBuffer): Promise<number>;

  readFile(fullpath:string, binary?: boolean): Promise<string|ArrayBuffer|null>;

  readDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  scanDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  delete(fullpath:string): Promise<boolean>;

  exists(fullpath:string): Promise<boolean>;
}

