let Utils = {
  _enableKeyListener() {
    L.DomEvent.on(
      this.map.getContainer(),
      "keydown",
      this._keyDownFunction,
      this
    );
    L.DomEvent.on(
      this.map.getContainer(),
      "keyup",
      this._keyDownFunction,
      this
    );
    L.DomEvent.on(
      this.map.getContainer(),
      "mouseover",
      this._keyDownFunction,
      this
    );
    this.map.boxZoom.disable();
  },
  _disableKeyListener() {
    L.DomEvent.off(
      this.map.getContainer(),
      "keydown",
      this._keyDownFunction,
      this
    );
    L.DomEvent.off(
      this.map.getContainer(),
      "keyup",
      this._keyDownFunction,
      this
    );
    L.DomEvent.off(
      this.map.getContainer(),
      "mouseover",
      this._keyDownFunction,
      this
    );

    //Reset to default boxZoom
    if (this.map.pm.pmOrtho._defaultBox) {
      this.map.boxZoom.enable();
    }
  },
  _keyDownFunction(e) {
    if (e.type === "keydown" && e.keyCode === 16) {
      // When Shift key is pressed down
      this.map.pm.pmOrtho._shiftpressed = false;
    } else if (e.type === "keyup" && e.keyCode === 16) {
      // When Shift key is released
      this.map.pm.pmOrtho._shiftpressed = true;
    }

    // Handling for custom keys
    if (
      this.map.pm.pmOrtho.options.customKey &&
      this.map.pm.pmOrtho.options.customKey !== "shift"
    ) {
      let customKey = this.map.pm.pmOrtho.options.customKey;
      // Check if the custom key is pressed
      if (
        ["keydown", "mouseover"].includes(e.type) &&
        (e.key == customKey ||
          e.code == customKey ||
          e.which == customKey ||
          e.keyCode == customKey ||
          (customKey == "alt" && e.altKey) ||
          ((customKey == "strg" || customKey == "ctrl") && e.ctrlKey))
      ) {
        this.map.pm.pmOrtho._shiftpressed = false;
      } else {
        this.map.pm.pmOrtho._shiftpressed = true;
      }
    } else if (e.type !== "keydown" && e.type !== "keyup") {
      // For other event types, set _shiftpressed based on the current state
      this.map.pm.pmOrtho._shiftpressed = !e.shiftKey;
    }
  },
  _getPointofAngle(latlng_p1, latlng_p2, startAngle = 0) {
    let p1 = this.map.latLngToContainerPoint(latlng_p1);
    let p2 = this.map.latLngToContainerPoint(latlng_p2);

    let distance = this._getDistance(p1, p2);
    //Get the angle between the two points
    let pointAngle = this._getAngle(p1, p2);

    let snapAngle = this.options.snapAngle || 45;
    let angle = 0;
    let angles = [];
    let current = 0;
    let i = 0;
    while (i < 360 / snapAngle) {
      current = (i * snapAngle + startAngle) % 360;
      angles.push(current);
      i++;
    }

    if (startAngle % 90 === 0) {
      angles.push(360);
    }
    angles.sort((a, b) => a - b);
    angle = angles.reduce(function (prev, curr) {
      return Math.abs(curr - pointAngle) < Math.abs(prev - pointAngle)
        ? curr
        : prev;
    });

    let point_result2 = this._findDestinationPoint(p1, distance, angle);
    return this.map.containerPointToLatLng(point_result2);
  },

  _findDestinationPoint(point, distance, angle) {
    angle = (angle - 90) % 360;
    let x = Math.round(Math.cos((angle * Math.PI) / 180) * distance + point.x);
    let y = Math.round(Math.sin((angle * Math.PI) / 180) * distance + point.y);
    return { x: x, y: y };
  },
  _getDistance(p1, p2) {
    let x = p1.x - p2.x;
    let y = p1.y - p2.y;
    return Math.sqrt(x * x + y * y);
  },
  _getAngle(p1, p2) {
    let x = p2.x - p1.x;
    let y = p2.y - p1.y;
    let _angle = (((Math.atan2(y, x) * 180) / Math.PI) * -1 - 90) * -1;
    return (_angle < 0 ? _angle + 360 : _angle) % 360;
  },
  _getRectanglePoint(A, B) {
    let rect = L.rectangle([A, B]);

    let rectangleWidth =
      this.map.latLngToContainerPoint(A).x -
      this.map.latLngToContainerPoint(B).x;
    let rectangleHeight =
      this.map.latLngToContainerPoint(A).y -
      this.map.latLngToContainerPoint(B).y;
    let w = this.map.pm.pmOrtho._getDistance(
      this.map.latLngToContainerPoint(rect.getBounds().getNorthEast()),
      this.map.latLngToContainerPoint(rect.getBounds().getNorthWest())
    );
    let h = this.map.pm.pmOrtho._getDistance(
      this.map.latLngToContainerPoint(rect.getBounds().getNorthEast()),
      this.map.latLngToContainerPoint(rect.getBounds().getSouthEast())
    );

    let pt_A = this.map.latLngToContainerPoint(A);
    let pt_B = this.map.latLngToContainerPoint(B);

    let d;
    if (w > h) {
      const p = { x: pt_B.x, y: pt_A.y };
      const angle = rectangleHeight < 0 ? 180 : 0;
      d = this.map.pm.pmOrtho._findDestinationPoint(p, w, angle);
    } else {
      const p = { x: pt_A.x, y: pt_B.y };
      const angle = rectangleWidth < 0 ? 90 : -90;
      d = this.map.pm.pmOrtho._findDestinationPoint(p, h, angle);
    }
    return this.map.containerPointToLatLng(d);
  },
};

export default Utils;
