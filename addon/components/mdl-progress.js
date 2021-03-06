import Ember from 'ember';
import layout from '../templates/components/mdl-progress';
import computed from 'ember-new-computed';

const { computed: { empty } } = Ember;

export default Ember.Component.extend({
  classNames: ['mdl-progress', 'mdl-js-progress'],
  classNameBindings: ['indeterminate:mdl-progress__indeterminate'],
  _progress: null,
  _buffer: null,
  indeterminate: empty('progress'),
  layout,

  didInsertElement() {
    this._super(...arguments);
    this.element.addEventListener('mdl-componentupgraded', function() {
      this._updateProgress();
      this._updateBuffer();
    }.bind(this));
  },

  _updateProgress() {
    let progress = this.get('progress');
    if (progress !== null) {
      this.element.MaterialProgress.setProgress(progress);
    }
  },
  _updateBuffer() {
    let buffer = this.get('buffer');
    if (buffer !== null) {
      this.element.MaterialProgress.setBuffer(buffer);
    }
  },

  progress: computed('_progress', {
    get() {
      return this.get('_progress');
    },
    set(key, newVal) {
      if (this.element) {
        this._updateProgress();
      }
      this.set('_progress', newVal);
      return newVal;
    }
  }),

  buffer: computed('_buffer', {
    get() {
      return this.get('_buffer');
    },
    set(key, newVal) {
      if (this.element) {
        this._updateBuffer();
      }
      this.set('_buffer', newVal);
      return newVal;
    }
  })
});
