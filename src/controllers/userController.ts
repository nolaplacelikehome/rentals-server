import { Request, Response } from 'express';
import User from '../entity/User';

// Display detail page for a specific user.
exports.user_detail = function(req: Request, res: Response) {
	res.send('NOT IMPLEMENTED: user detail: ' + req.params.id);
};

// Display user create form on GET.
exports.user_create_get = function(req: Request, res: Response) {
	res.send('NOT IMPLEMENTED: user create GET');
};

// Handle user create on POST.
exports.user_create_post = function(req: Request, res: Response) {
	res.send('NOT IMPLEMENTED: user create POST');
};

// Display user delete form on GET.
exports.user_delete_get = function(req: Request, res: Response) {
	res.send('NOT IMPLEMENTED: user delete GET');
};

// Handle user delete on POST.
exports.user_delete_post = function(req: Request, res: Response) {
	res.send('NOT IMPLEMENTED: user delete POST');
};

// Display user update form on GET.
exports.user_update_get = function(req: Request, res: Response) {
	res.send('NOT IMPLEMENTED: user update GET');
};

// Handle user update on POST.
exports.user_update_post = function(req: Request, res: Response) {
	res.send('NOT IMPLEMENTED: user update POST');
};