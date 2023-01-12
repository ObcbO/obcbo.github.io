var vector={_x:1,_y:0,create:function(t,i){var e=Object.create(this);return e.setX(t),e.setY(i),e},duplicate:function(){return vector.create(this._x,this._y)},random:function(t,i,e,n){return e=Math.random()*(t-e)+e,n=Math.random()*(i-n)+n,vector.create(e,n)},setX:function(t){this._x=t},getX:function(){return this._x},setY:function(t){this._y=t},getY:function(){return this._y},bounds:function(t,i,e){var n=t;this._x>i+n&&(this._x=-t),this._x<-n&&(this._x=i+t),this._y>e+n&&(this._y=-t),this._y<-n&&(this._y=e+t)},outOfBounds:function(t,i,e,n){return this._x<t||this._x>e||this._y<i||this._y>n||void 0},setAngle:function(t){var i=this.getLength();this._x=Math.cos(t)*i,this._y=Math.sin(t)*i},getAngle:function(){return Math.atan2(this._y,this._x)},angleTo:function(t){return Math.atan2(t.getY()-this._y,t.getX()-this._x)},distanceTo:function(t){var i=t.getX()-this._x,t=t.getY()-this._y;return Math.sqrt(i*i+t*t)},setLength:function(t){var i=this.getAngle();this._x=Math.cos(i)*t,this._y=Math.sin(i)*t},gravitateTo:function(t,i,e){var n=Vector.create(0,0),s=mypos.distanceTo(t);n.setLength(G*i*e/(s*s)),n.setAngle(this.angleTo(t)),this.addTo(n)},getLength:function(){return Math.sqrt(this._x*this._x+this._y*this._y)},maxSpeed:function(t){this.getLength()>t&&this.setLength(t)},add:function(t){return vector.create(this._x+t.getX(),this._y+t.getY())},subtract:function(t){return vector.create(this._x-t.getX(),this._y-t.getY())},multiply:function(t){return vector.create(this._x*t,this._y*t)},divide:function(t){return vector.create(this._x/t,this._y/t)},addTo:function(t){this._x+=t.getX(),this._y+=t.getY()},subtractFrom:function(t){this._x-=t.getX(),this._y-=t.getY()},multiplyBy:function(t){this._x*=t,this._y*=t},divideBy:function(t){this._x/=t,this._y/=t},normalize:function(t){var i=Math.sqrt(this._x*this._x+this._y*this._y);if(0!=i)return vector.create(t*this._x/i,t*this._y/i)},dot:function(t){return this._x*t._x+this._y*t._y}};