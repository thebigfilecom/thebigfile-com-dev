import Debug "mo:base/Debug";

actor HelloActor {
  public func hello() : async () {
    Debug.print("Hello, World! from BigFile \n");
  }
};
