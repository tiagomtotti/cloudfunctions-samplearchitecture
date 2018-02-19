
export class ObjectValidationError extends Error {
    
    errors: any[];
    
    constructor(errors: any[]) {
        super("Error validating object");       
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ObjectValidationError.prototype);
        this.errors = errors;
    }
}