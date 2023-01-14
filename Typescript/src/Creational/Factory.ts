export enum shapeType {
    CIRCLE,
    RECTANGLE,
    SQUARE,
};

interface IShape {
    draw(): string
};

export class Circle implements IShape {
    draw(): string {
        return 'Created Circle';
    }
};

export class Rectangle implements IShape {
    draw(): string {
        return 'Created Rectangle';
    }
};

export class Square implements IShape {
    draw(): string {
        return 'Created Square';
    }
};

export class ShapeFactory {
    public getShape(type: shapeType): IShape {
        switch (type) {
            case shapeType.CIRCLE: return new Circle();
            case shapeType.RECTANGLE: return new Rectangle();
            case shapeType.SQUARE: return new Square();
        }
    }
};